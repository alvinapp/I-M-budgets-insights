import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { showCustomToast } from "client/utils/Toast";
import React, { FC, useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import styled from "styled-components";

type BudgetSettingCardProps = {
  category?: string;
  emoji?: string;
  increment?: any;
  decrement?: any;
  amount?: number;
  selected?: boolean;
  addValue: (e: any) => void;
  maxValue: number;
  unallocatedAmount: number;
  updateValue?: (value: number) => void;
};
export const BudgetSettingCard = ({
  category,
  emoji,
  amount = 0,
  increment,
  decrement,
  selected = false,
  addValue,
  maxValue,
  updateValue,
  unallocatedAmount
}: BudgetSettingCardProps) => {
  const [inputValue, setInputValue] = useState(amount);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);



  const handleSubmitValue = (value: number) => {
    const changeDifference = value - amount;

    const newUnallocatedAmount = unallocatedAmount - changeDifference;

    if (!isNaN(value) && newUnallocatedAmount >= 0) {
      addValue(value);
      if (updateValue) updateValue(value);
      hideModal();
    } else {
      showCustomToast({ message: "Change exceeds the unallocated budget" });
    }
  };

  useEffect(() => {
    setInputValue(amount);
  }, [amount]);

  const showModal = (): void => setIsModalVisible(true);
  const hideModal = (): void => setIsModalVisible(false);

  const handleIncrement = (event: any) => {
    event.stopPropagation();
    increment();
  };
  const handleDecrement = (event: any) => {
    event.stopPropagation();
    decrement();
  };
  const currencySymbol = useCurrencySettingsStore(
    (state: any) => state.currencySymbol
  );
  return (
    <div className="flex flex-row items-center justify-between mb-3">
      <div className="flex-col">
        <div className="flex flex-row items-center">
          <div className="flex flex-col mr-2">
            <div className="h-6 w-6 rounded-full flex items-center justify-center bg-skin-iconSecondary">
              <div>{emoji}</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-primary text-sm font-medium tracking-wide text-skin-base">
              {category}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex flex-col justify-center">
          <div className="rounded-full shadow-budgetButton flex justify-center items-center flex-row p-2.5">
            {amount > 0 ? (
              <div className="flex flex-row items-center">
                <FiMinus
                  color="#042EBD"
                  size="1.2rem"
                  onClick={handleDecrement}
                />
                <div className="font-primary font-semibold text-xs mx-2">
                  <input
                    className="bg-transparent font-custom text-sm tracking-longest_text text-skin-base text-center font-medium border-l-0 border-r-0 border-t-0 focus:ring-0 focus:outline-0 focus:border-b-0 w-20 h-5 cursor-none"
                    type="number"
                    value={inputValue.toString()}
                    min={0}
                    max={maxValue}
                    readOnly={true}
                    onFocus={showModal}
                    onWheel={(e) => e.preventDefault()}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                        e.preventDefault();
                      }
                    }}
                  />
                  <sup className="font-custom font-medium text-xxs text-skin-base align-super">
                    {currencySymbol}
                  </sup>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <FiPlus color="#042EBD" size="1.2rem" onClick={handleIncrement} />
          </div>
        </div>
      </div>
      {isModalVisible && (
        <Modal
          isVisible={isModalVisible}
          onOk={handleSubmitValue}
          onCancel={hideModal}
          emoji={emoji}
          category={category}
          amount={amount}
          unallocated={unallocatedAmount}
        />
      )}
    </div>
  );
};

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  background-color: #101010;
  min-width: 100px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const OptionButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  background-color: white;
  min-width: 100px;
  color: #101010;
  border: 1px solid #101010;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

interface ModalProps {
  isVisible: boolean;
  emoji?: string;
  category?: string;
  amount?: number;
  unallocated?: number;
  onOk: (newValue: number) => void;
  onCancel: () => void;
}

export const Modal: FC<ModalProps> = ({ isVisible, onOk, onCancel, emoji, category, amount, unallocated }) => {
  const [tempValue, setTempValue] = useState<string>('');

  if (!isVisible) return null;

  const tempValueNumber = Number(tempValue) || 0;

  const changeDifference = tempValueNumber - (amount ?? 0);

  const availableBudget = (unallocated ?? 0) - Math.max(changeDifference, 0);


  return (
    <div className="modal" style={
      {
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '20.313rem',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '5px 5px 30px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }
    }>
      <div className="flex-col">
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center bg-skin-iconSecondary">
                <div>{emoji}</div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-primary text-sm font-medium tracking-wide text-skin-base">
                {category}
              </div>
            </div>
          </div>
          <div className="flex flex-col mr-2">
            <div className="rounded-full flex items-center justify-center">
              <div>
                <span className="font-primary text-sm font-medium tracking-wide text-skin-base">
                  Available:
                </span>
                <span className="font-primary text-sm ml-1 font-medium tracking-wide text-skin-base">
                  {availableBudget}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        className="bg-transparent font-custom text-4xl tracking-title text-skin-base text-center font-medium w-full border-b-2 border-b-skin-base border-l-0 border-r-0 border-t-0 focus:ring-0 focus:outline-0 focus:border-b-skin-base cursor-none"
        type="number"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        placeholder={amount?.toString()}
      /><div className="flex flex-row items-center px-3 py-3 justify-between w-full"
      >
        <SubmitButton onClick={() => onOk(parseInt(tempValue) || 0)}>OK</SubmitButton>
        <OptionButton onClick={onCancel}>Cancel</OptionButton>
      </div>
    </div>
  );
};

