import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
type MemeberProps = {
  memberName?: string;
  age?: string;
  onClick?: (choice: any) => void;
  selected?: boolean;
  increment?: any;
  decrement?: any;
  numberOfPeople?: number;
};
export const Member = ({
  onClick,
  selected,
  age,
  memberName,
  numberOfPeople = 0,
  increment,
  decrement,
}: MemeberProps) => {
  const handleIncrement = (event: any) => {
    event.stopPropagation();
    increment();
  };
  const handleDecrement = (event: any) => {
    event.stopPropagation();
    decrement();
  };
  return (
    <div
      className={`${
        selected ? "border-skin-primary" : "border-skin-base"
      } rounded-lg border px-2.5 py-2.5 mr-3 mb-3 font-poppins tracking-paragraph font-medium flex flex-row justify-between`}
    >
      <div className="flex flex-col mr-3">
        <div className="text-skin-base text-tiny">{memberName}</div>
        <div className="text-skin-subtitle text-xxs">{age}</div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="rounded-full shadow-card flex justify-center items-center flex-row px-2 py-2">
          {numberOfPeople > 0 ? (
            <div className="flex flex-row items-center">
              <FiMinus
                color="#04506E"
                size="0.75rem"
                onClick={handleDecrement}
              />
              <div className="font-poppins font-semibold text-xs mx-2">
                {numberOfPeople}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <FiPlus color="#04506E" size="0.75rem" onClick={handleIncrement} />
        </div>
      </div>
    </div>
  );
};
