import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FiCalendar } from "react-icons/fi";
import {
  format,
  setYear,
  setMonth,
  startOfMonth,
  endOfMonth,
  endOfDay,
  isAfter,
} from "date-fns";

interface MonthYearPickerProps {
  onMonthYearSubmit: (dates: { startDate: Date; endDate: Date }) => void;
  startDate: Date;
  endDate: Date;
}

const MonthYearPickerWrapper = styled.div`
  position: relative;
`;

const IconAndInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const IconContainer = styled.div`
  margin-right: 0px;
`;

const DatePickerDiv = styled.div`
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  padding: 10px;
`;

const CalendarModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 20.313rem;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 5px 5px 30px 8px rgba(0, 0, 0, 0.1);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const Item = styled.div<{ selected: boolean; disabled?: boolean }>`
  padding: 10px;
  text-align: center;
  background-color: ${({ selected, disabled }) =>
    selected ? "transparent" : disabled ? "#e5e5e5" : "#f0f0f0"};
  border: ${({ selected }) => (selected ? "2px solid black" : "none")};
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ disabled }) => (disabled ? "#a9a9a9" : "black")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

const Scrollable = styled.div`
  height: 200px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  background-color: #101010;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const OptionButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  background-color: white;
  color: #101010;
  border: 1px solid #101010;
  border-radius: 5px;
  cursor: pointer;
`;

const MonthYearPicker: React.FC<MonthYearPickerProps> = ({
  onMonthYearSubmit,
  startDate,
  endDate,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(startDate);
  const [dates, setDates] = useState({
    startDate: startOfMonth(startDate),
    endDate: endOfMonth(endDate),
  });
  const [selectedMonth, setSelectedMonth] = useState<string>(
    format(startDate, "MMM")
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    startDate.getFullYear()
  );
  const [viewMode, setViewMode] = useState<"month" | "year">("month");

  const months: string[] = Array.from({ length: 12 }, (_, i) =>
    format(setMonth(new Date(), i), "MMM")
  );
  const currentYear: number = new Date().getFullYear();
  const years: number[] = Array.from({ length: 16 }, (_, i) => currentYear - i);
  const today = new Date();
  const isCurrentYear = selectedYear === today.getFullYear();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!modalRef.current?.contains(event.target as Node)) {
        setSelectedMonth(format(startDate, "MMM"));
        setSelectedYear(startDate.getFullYear());
        setViewMode("month");
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleMonthClick = (month: string, isDisabled: boolean) => {
    if (!isDisabled) {
      const monthIndex = months.findIndex((m) => m === month);
      setSelectedMonth(month);
      setSelectedDate(setMonth(selectedDate, monthIndex));
    }
  };

  const handleYearClick = (year: number) => {
    const newSelectedDate = setYear(selectedDate, year);
    // If the selected year is the current year and the selected month is beyond the current month, reset the selected month to the current month
    if (
      year === new Date().getFullYear() &&
      selectedDate.getMonth() > new Date().getMonth()
    ) {
      setSelectedDate(new Date());
      setSelectedMonth(format(new Date(), "MMM"));
    } else {
      setSelectedDate(newSelectedDate);
    }
    setSelectedYear(year);
  };

  useEffect(() => {
    setDates({
      startDate: startOfMonth(startDate),
      endDate: endOfMonth(endDate),
    });
    setSelectedDate(startDate);
    setSelectedMonth(format(startDate, "MMM"));
    setSelectedYear(startDate.getFullYear());
  }, [startDate, endDate]);

  const handleSubmit = () => {
    onMonthYearSubmit({
      startDate: startOfMonth(selectedDate),
      endDate: endOfMonth(selectedDate),
    });
    setDates({
      startDate: startOfMonth(selectedDate),
      endDate: endOfMonth(selectedDate),
    });
    setViewMode("month");
    setIsModalOpen(false);
  };

  const modalTitle = `${format(startOfMonth(selectedDate), "d")} - ${format(
    endOfMonth(selectedDate),
    "do MMMM yyyy"
  )}`;

  return (
    <MonthYearPickerWrapper>
      <IconAndInputContainer>
        <IconContainer>
          <FiCalendar />
        </IconContainer>
        <DatePickerDiv
          onClick={() => setIsModalOpen(true)}
          className="font-custom font-semibold text-xl text-skin-base tracking-title"
        >
          {`${format(dates.startDate, "MMMM")} ${format(
            dates.startDate,
            "yyyy"
          )}`}
        </DatePickerDiv>
      </IconAndInputContainer>
      {isModalOpen && (
        <CalendarModal ref={modalRef}>
          <div className="font-custom font-semibold text-xxxs text-skin-base tracking-title">
            Select Month and Year to filter
          </div>
          <div className="font-custom font-semibold text-xl text-skin-base tracking-title mb-2">
            {modalTitle}
          </div>
          {viewMode === "month" ? (
            <>
              <Grid>
                {months.map((month, index) => {
                  const monthDate = setMonth(
                    new Date(selectedDate.getFullYear(), index),
                    index
                  );
                  const isDisabled =
                    isCurrentYear && isAfter(monthDate, endOfDay(new Date()));
                  return (
                    <Item
                      key={index}
                      onClick={() => handleMonthClick(month, isDisabled)}
                      selected={month === selectedMonth}
                      disabled={isDisabled}
                    >
                      {month}
                    </Item>
                  );
                })}
              </Grid>
            </>
          ) : (
            <Scrollable>
              {years.map((year, index) => {
                const isDisabled =
                  isCurrentYear &&
                  isAfter(
                    setMonth(
                      new Date(
                        year,
                        months.findIndex((m) => m === selectedMonth)
                      ),
                      months.findIndex((m) => m === selectedMonth)
                    ),
                    endOfDay(new Date())
                  );
                return (
                  <Item
                    key={index}
                    onClick={() => !isDisabled && handleYearClick(year)}
                    selected={year === selectedDate.getFullYear()}
                  >
                    {year}
                  </Item>
                );
              })}
            </Scrollable>
          )}
          <div className="flex gap-2 mt-4 w-full justify-center items-center flex-row">
            <OptionButton onClick={() => setViewMode("month")}>
              Month
            </OptionButton>
            <OptionButton onClick={() => setViewMode("year")}>
              Year
            </OptionButton>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          </div>
        </CalendarModal>
      )}
    </MonthYearPickerWrapper>
  );
};

export default MonthYearPicker;
