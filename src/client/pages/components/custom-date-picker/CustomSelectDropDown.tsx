import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const CustomSelect = styled.div`
  position: relative;
`;

const SelectButton = styled.button`
  border: 1px solid #101010;
  border-radius: 8px;
  color: white;
  background: #101010;
  appearance: none;
  min-width: 100px;
  padding: 8px 16px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  margin-top: 5px;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #101010;
  border-radius: 8px;
  z-index: 100;
`;

const Option = styled.div`
  padding: 8px 16px;
`;

const CustomSelectDropdown = ({
  options,
  onSelect,
  defaultValue,
  isDisabled,
}: {
  options: any;
  onSelect: any;
  defaultValue: any;
  isDisabled: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null); // Specify the type of the ref

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <CustomSelect className="font-custom">
      <SelectButton className="font-custom" onClick={isDisabled ? () => { } : toggleDropdown}>
        {selectedOption || "Select an option"}
      </SelectButton>
      {isOpen && (
        <Dropdown ref={dropdownRef}>
          {options.map((option: any, index: any) => (
            <Option className="font-custom" key={index} onClick={() => handleSelect(option)}>
              {option}
            </Option>
          ))}
        </Dropdown>
      )}
    </CustomSelect>
  );
};

export default CustomSelectDropdown;
