import useFlightStore from "client/store/flightStore";
import { convertDate, dateFormat } from "client/utils/Formatters";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
type CustomDropDownProps = {
  icon?: React.ReactNode;
};
export const CalendarDropDown = ({ icon }: CustomDropDownProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const flightStore = useFlightStore((state: any) => state);
  const CustomDatePicker = forwardRef(
    ({ value, onClick }: { value?: any; onClick?: () => void }, ref) => (
      <button
        id="day-dropdown"
        aria-expanded="true"
        aria-haspopup="true"
        className="text-skin-base text-base font-poppins rounded-lg px-4 py-4 text-center shadow-card w-full flex flex-row items-center justify-between"
        type="button"
        onClick={onClick}
      >
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="text-skin-base text-lg mr-4">{icon}</div>
            <div className="text-base font-poppins text-skin-base font-medium">{`${dateFormat(
              startDate
            )}`}</div>
          </div>
        </div>
        <div className="text-skin-neutral">
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </button>
    )
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => {
        setStartDate(date);
        flightStore.setDepartureDate(convertDate(date.toString()));
      }}
      customInput={<CustomDatePicker />}
      minDate={new Date()}
    />
  );
};
