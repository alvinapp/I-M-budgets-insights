import React from "react";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import { TailSpin } from "react-loader-spinner";

import useCurrencySettingsStore from "client/store/currencySettingsStore";
type AddMonthlyIncomeInputProps = {
  increment?: () => void;
  decrement?: () => void;
  value?: number;
  addValue: (e: any) => void;
};
export const AddMonthlyIncomeInput = ({
  value,
  increment,
  decrement,
  addValue,
}: AddMonthlyIncomeInputProps) => {
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );

  return (
    <div className="flex flex-row items-center">
      <div
        className="flex justify-center items-center p-3.5 rounded-full border border-1 border-skin-primary"
        onClick={decrement}
      >
        <FiMinus color="#6F89A5" />
      </div>
      <div className="relative rounded-full p-3.5 bg-skin-input mx-2 flex flex-row justify-center items-center">
        <div>{currencySymbol}</div>
        <input
          className="bg-transparent font-custom text-xl tracking-title text-skin-base text-center font-semibold w-48 focus:border-none focus:outline-none"
          type="number"
          value={value}
          max={25}
          onChange={(e) => {
            addValue(parseInt(e.target.value));
          }}
        />
      </div>
      <div
        className="flex justify-center items-center rounded-full p-4 border border-1 border-skin-primary"
        onClick={increment}
      >
        <FiPlus color="#04506e" />
      </div>
    </div>
  );
};

//Text input field

type TextInputProps = {
  label?: string;
  leadingIcon?: React.ReactNode;
  value?: any;
  hasValue?: boolean;
  onClick?: () => void;
  addValue: (e: any) => void;
  placeHolder?: string;
  type?: any;
  hasCurrencySymbol?: boolean;
  clearInput?: any;
  isLoading?: boolean;
};
export const TextInput = ({
  label,
  leadingIcon,
  value,
  hasValue = true,
  onClick,
  addValue,
  placeHolder,
  type = "text",
  hasCurrencySymbol = false,
  clearInput,
  isLoading = false,
}: TextInputProps) => {
  const handleClearInput = (event: any) => {
    event.stopPropagation();
    clearInput();
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div
          className={`font-custom font-medium text-xs tracking-subtitle mb-2 text-skin-base`}
        >
          {label}
        </div>
      </div>
      <div className="flex flex-row relative">
        <div
          className={`rounded flex flex-row items-center  pl-3.5 w-screen ${
            hasValue
              ? "border border-1 border-skin-base py-2"
              : "shadow-input py-3"
          }`}
        >
          <div
            className={`flex flex-col ${
              hasValue ? "text-skin-secondary" : "text-skin-inputDisabled"
            }`}
          >
            {leadingIcon}
          </div>
          <div
            className={`font-medium font-custom text-base tracking-progress_label flex flex-row justify-center items-center ${
              hasValue ? "text-skin-base" : "text-skin-inputDisabled"
            }`}
          >
            {hasCurrencySymbol ? (
              <div className="translate-x-12">{hasValue ? "₦ " : ""}</div>
            ) : (
              <div></div>
            )}
            <input
              disabled={hasValue ? false : true}
              type={type}
              placeholder={placeHolder}
              value={value}
              className={`outline-none text-center border-transparent focus:border-transparent focus:ring-0`}
              onChange={(e) => {
                addValue(e.target.value);
              }}
            />
          </div>
          {hasValue ? (
            <button
              className="rounded-full flex items-center bg-skin-secondary p-2 absolute right-2"
              onClick={handleClearInput}
            >
              <FiX color="#4E6783" />
            </button>
          ) : isLoading ? (
            <TailSpin
              height="20"
              width="20"
              color="#056489"
              ariaLabel="tail-spin-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

//Text field with popup

type TextInputWithPopupProps = {
  label?: string;
  leadingIcon?: React.ReactNode;
  value?: any;
  hasValue?: boolean;
  onClick?: () => void;
  addValue: (e: any) => void;
  placeHolder?: string;
  type?: any;
  hasCurrencySymbol?: boolean;
  clearInput?: any;
  isLoading?: boolean;
};
export const TextInputWithPopup = ({
  label,
  leadingIcon,
  value,
  hasValue = true,
  onClick,
  addValue,
  placeHolder,
  type = "text",
  hasCurrencySymbol = false,
  clearInput,
  isLoading = false,
}: TextInputWithPopupProps) => {
  const handleClearInput = (event: any) => {
    event.stopPropagation();
    clearInput();
  };
  const currency = useCurrencySettingsStore((state: any) => state);
  return (
    <div
      className={`rounded flex flex-col ${
        hasValue ? "border border-1 border-skin-base py-2" : "shadow-card py-3"
      }`}
      onClick={hasValue ? () => {} : onClick}
    >
      <div className="flex flex-row">
        <div
          className={`font-custom font-medium text-xs tracking-subtitle mb-2 text-skin-base`}
        >
          {label}
        </div>
      </div>

      <div className={`flex flex-row items-center  pl-3.5 w-screen`}>
        <div
          className={`flex flex-col h-8 w-8 justify-center ${
            hasValue ? "text-skin-primary" : "text-skin-inputDisabled"
          }`}
        >
          {leadingIcon}
        </div>
        <div
          className={`font-medium font-custom text-base tracking-progress_label flex flex-row justify-center items-center ${
            hasValue ? "text-skin-base" : "text-skin-inputDisabled"
          }`}
        >
          {hasCurrencySymbol ? (
            <div className="translate-x-12">
              {hasValue ? `${currency.currencySymbol}` : ""}
            </div>
          ) : (
            <div></div>
          )}
          <input
            disabled={hasValue ? false : true}
            type={type}
            placeholder={hasValue ? value : placeHolder}
            value={value}
            className={`w-64 outline-none text-center border-transparent focus:border-transparent focus:ring-0 placeholder-[#6f89a5]`}
            onChange={(e) => {
              addValue(e.target.value);
            }}
          />
        </div>
        {hasValue ? (
          <button
            className="rounded-full flex items-center bg-skin-secondary p-2 absolute right-2"
            onClick={handleClearInput}
          >
            <FiX color="#4E6783" />
          </button>
        ) : isLoading ? (
          <TailSpin
            height="20"
            width="20"
            color="#056489"
            ariaLabel="tail-spin-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
