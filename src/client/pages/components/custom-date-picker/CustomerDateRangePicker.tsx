import React, { useState, useEffect, useRef, useCallback } from "react";
import { FiCalendar } from "react-icons/fi";
import styled from "styled-components";
import {
  format,
  getYear,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  addDays,
  setYear,
  setMonth,
  isSameMonth,
  isSameYear,
  isSameDay,
  isBefore,
  isAfter,
} from "date-fns";
import CustomSelectDropdown from "./CustomSelectDropDown";

const DatePickerWrapper = styled.div`
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-65%);
  left: 10px;
  pointer-events: none;
`;

const DatePickerInput = styled.input`
  padding: 10px;
  font-size: 16px;
  min-width: 225px;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 8px;
  box-shadow: 0 1px 30px rgb(7 100 137 / 30%);
  margin-bottom: 5px;
  outline: none;
`;

const CalendarModal = styled.div`
  position: fixed; /* Fixed position to ensure it's always centered */
  top: 0%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Center the modal */
  padding: 20px;
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  backdrop-filter: blur(10px); /* Apply backdrop blur effect */
  border-radius: 8px;
  z-index: 100;
  box-shadow: 0 1px 30px rgb(7 100 137 / 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
`;

const MonthYearSelection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const DayName = styled.div`
  width: 40px; /* Adjust width to match Day */
  text-align: center;
  margin: 5px 0;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  justify-items: center;
`;

const Day = styled.div<{
  isToday: boolean;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isHovered: boolean;
}>`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(props) =>
    props.isToday ? "#e0e0e0" : props.isInRange ? "#101010" : "transparent"};
  color: ${(props) =>
    props.isToday
      ? "black"
      : props.isInRange
        ? "#fff"
        : props.isCurrentMonth
          ? "black"
          : "#ccc"};
  border-radius: 50%;
  border: ${(props) => (props.isSelected ? "2px solid #101010" : "none")};
  &:hover {
    background: ${(props) =>
    !props.isSelected && props.isHovered ? "#c4c4c4" : ""};
  }
`;

// Types
interface DateRange {
  start: Date | null;
  end: Date | null;
}

interface CustomDateRangePickerProps {
  onDateRangeSelect: (range: DateRange) => void;
  startDate: any;
  endDate: any;
  disabled: boolean;
  restrictToCurrentMonth?: boolean;
  lastUpdatedEnv: "props" | "local";
  placeholder?: string;
  isActive: boolean;
}

const CustomDateRangePicker: React.FC<CustomDateRangePickerProps> = ({
  onDateRangeSelect,
  startDate,
  endDate,
  disabled,
  restrictToCurrentMonth,
  lastUpdatedEnv,
  placeholder,
  isActive

}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange>({
    start: startDate,
    end: endDate,
  });
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [startMonth, setStartMonth] = useState<Date>(new Date());
  const [lastUpdated, setLastUpdated] = useState<"props" | "local">(
    lastUpdatedEnv ?? "local"
  );
  const modalRef = useRef<HTMLDivElement>(null);

  const months = Array.from(new Array(12), (_, index) => index);

  type Year = number;

  function getYears(numYears: number): Year[] {
    const currentYear: Year = new Date().getFullYear();
    const years = Array.from(
      { length: numYears },
      (_, i) => currentYear - numYears + 1 + i
    );
    return years.sort((a, b) => b - a);
  }

  // Helper function to generate calendar dates
  const generateCalendarDates = useCallback(
    (currentMonth: Date) => {
      const startDay = startOfWeek(startOfMonth(currentMonth));
      const endDay = endOfWeek(endOfMonth(currentMonth));
      const dates: Date[] = [];
      for (let date = startDay; date <= endDay; date = addDays(date, 1)) {
        dates.push(date);
      }
      return dates;
    },
    [restrictToCurrentMonth]
  );

  // use effect for updating dateRange from startdate and endDate
  useEffect(() => {
    if (startDate && endDate) {
      setDateRange({ start: startDate, end: endDate });
    }
  }, [startDate, endDate]);

  const handleDateSelect = useCallback((date: Date) => {
    // Check if both a start and end date are already selected to form a complete range.
    if (dateRange.start && dateRange.end) {
      // If a complete range exists, any selected date becomes the new start date,
      // and the end date is reset.
      setDateRange({ start: date, end: null });
    } else if (!dateRange.start) {
      // If no start date is set, set the selected date as the start date.
      setDateRange({ start: date, end: null });
    } else if (dateRange.start && !dateRange.end) {
      // If only a start date is set (incomplete range), 
      // decide whether to set this date as the new end date or reset the start date based on its chronological order.
      if (isBefore(date, dateRange.start)) {
        // If the selected date is before the current start date, reset the range with the selected date as the new start.
        setDateRange({ start: date, end: null });
      } else {
        // If the selected date is after the current start date, set it as the end date, completing the range.
        setDateRange({ start: dateRange.start, end: date });
        setIsModalOpen(false); // Optionally close the modal upon completing the selection
      }
    }
  }, [dateRange, setIsModalOpen]);



  useEffect(() => {
    if (dateRange.start && dateRange.end && lastUpdated === "local") {
      onDateRangeSelect(dateRange);
    }
  }, [dateRange, lastUpdated]);

  useEffect(() => {
    if (
      (startDate !== dateRange.start || endDate !== dateRange.end) &&
      lastUpdated !== "props"
    ) {
      setDateRange({ start: startDate, end: endDate });
      setLastUpdated("props");
    }
  }, [startDate, endDate, lastUpdated, dateRange]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleYearChange = (year: number) => {
    setCurrentMonth(setYear(currentMonth, year));
  };

  const handleMonthChange = (month: string) => {
    const monthIndex = months.findIndex(
      (m) => format(setMonth(new Date(), m), "MMMM") === month
    );
    setCurrentMonth(setMonth(currentMonth, monthIndex));
  };

  const isInRange = useCallback(
    (date: Date): boolean => {
      if (
        dateRange.start &&
        !dateRange.end &&
        hoverDate &&
        isAfter(hoverDate, dateRange.start)
        // isSameMonth(date, hoverDate)
      ) {
        return isAfter(date, dateRange.start) && isBefore(date, hoverDate);
      }
      if (dateRange.start && dateRange.end) {
        return isAfter(date, dateRange.start) && isBefore(date, dateRange.end);
      }
      return false;
    },
    [dateRange.start, dateRange.end, hoverDate]
  );

  const isHoveredDate = useCallback(
    (date: Date): boolean => {
      return hoverDate ? isSameDay(date, hoverDate) : false;
    },
    [hoverDate]
  );

  const renderInputValue = (): string => {
    const startDisplay = lastUpdated === "local" ? dateRange.start : startDate;
    const endDisplay = lastUpdated === "local" ? dateRange.end : endDate;

    const formattedStart = startDisplay
      ? isSameYear(startDisplay, endDisplay) &&
        isSameMonth(startDisplay, endDisplay)
        ? format(startDisplay, "MMM d")
        : format(startDisplay, "MMM d, yyyy")
      : "";
    const formattedEnd = endDisplay ? format(endDisplay, "MMM d, yyyy") : "";

    return formattedStart && formattedEnd
      ? `${formattedStart} - ${formattedEnd}`
      : "";
  };

  useEffect(() => {
    const newStartMonth = lastUpdated === "local" ? dateRange.start : startDate;
    if (newStartMonth && !isSameMonth(newStartMonth, startMonth)) {
      setStartMonth(newStartMonth);
    }
  }, [lastUpdated, dateRange.start, startDate, startMonth]);

  useEffect(() => {
    if (isModalOpen && startMonth) {
      setCurrentMonth(startOfMonth(startMonth));
    }
  }, [isModalOpen, startMonth]);

  return (
    <DatePickerWrapper className="font-custom">
      {/* <IconContainer>
        <FiCalendar />
      </IconContainer>
      <DatePickerInput
        value={placeholder ?? renderInputValue()}
        readOnly
        onClick={() => setIsModalOpen(!isModalOpen)}
        placeholder="Select date range"
      /> */}
      <button
        className={`${isActive
          ? "bg-skin-secondaryWithOpacity rounded-full drop-shadow-lg"
          : " bg-skin-accent2 rounded-full"
          } px-4 py-1 mr-2 mb-3`}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <div
          className={`${isActive
            ? " text-skin-primary font-primary text-xs font-medium tracking-longtext"
            : " text-skin-subtitle font-primary text-xs font-medium tracking-longtext"
            }`}
        >
          {placeholder ?? renderInputValue()}
        </div>
      </button>
      {isModalOpen && (
        <CalendarModal ref={modalRef}>
          <MonthYearSelection>
            <CustomSelectDropdown
              options={months.map((month) =>
                format(setMonth(new Date(), month), "MMMM")
              )}
              onSelect={handleMonthChange}
              defaultValue={format(startMonth ?? currentMonth, "MMMM")}
              isDisabled={disabled}
            />
            <CustomSelectDropdown
              options={getYears(120)}
              onSelect={handleYearChange}
              defaultValue={getYear(startMonth ?? currentMonth)}
              isDisabled={disabled}
            />
          </MonthYearSelection>
          <CalendarHeader className="font-custom">
            {["S", "M", "T", "W", "T", "F", "S"].map((dayName) => (
              <DayName key={dayName}>{dayName}</DayName>
            ))}
          </CalendarHeader>
          <CalendarGrid className="font-custom">
            {generateCalendarDates(currentMonth).map((date) => (
              <Day
                key={date.toString()}
                isToday={isSameDay(date, new Date())}
                isCurrentMonth={isSameMonth(date, currentMonth)}
                isSelected={
                  !!(
                    (dateRange.start && isSameDay(date, dateRange.start)) ||
                    (dateRange.end && isSameDay(date, dateRange.end))
                  )
                }
                isInRange={isInRange(date)}
                isHovered={isHoveredDate(date)}
                onMouseEnter={() => setHoverDate(date)}
                onMouseLeave={() => setHoverDate(null)}
                onClick={() => handleDateSelect(date)}
                style={{
                  opacity:
                    restrictToCurrentMonth && !isSameMonth(date, currentMonth)
                      ? 0.01
                      : 1,
                  pointerEvents:
                    restrictToCurrentMonth && !isSameMonth(date, currentMonth)
                      ? "none"
                      : "auto",
                }}
              >
                {format(date, "d")}
              </Day>
            ))}
          </CalendarGrid>
        </CalendarModal>
      )}
    </DatePickerWrapper>
  );
};

export default CustomDateRangePicker;
