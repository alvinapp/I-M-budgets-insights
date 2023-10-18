import React, { useState } from "react";
import bank from "../../assets/images/bank.svg";
import FilterButton from "../components/FilterButton";
import Account from "client/models/Account";
import { FiCalendar } from "react-icons/fi";
import MainButton from "../components/MainButton";
import { dateFilters } from "client/utils/MockData";
import { useNavigate } from "react-router-dom";
type InsightsFiltersProps = {
  accounts?: Array<Account>;
  activeAccount?: Account;
  onClick?: (account: Account) => void;
};
const InsightsFilters = ({
  accounts,
  activeAccount,
  onClick,
}: InsightsFiltersProps) => {
  const [activeDateFilter, setActiveDateFilter] = useState({
    id: 0,
    name: "All time",
  });
  const uniqueAccounts: Account[] | undefined = Array.from(
    new Set(accounts?.map((account) => account.name))
  )
    .map((name) => {
      return accounts?.find((account) => account.name === name);
    })
    .filter((account) => account) as Account[];
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-6 mx-4">
      <div className="flex flex-row justify-between items-center">
        <div className="text-xs font-poppins font-semibold text-skin-neutral tracking-longtext">
          Clear
        </div>
        <div className="font-workSans text-skin-base font-semibold tracking-title text-base">
          Filter by
        </div>
        <div className="flex flex-col"></div>
      </div>
      <div className="flex flex-row justify-start items-center mt-10">
        <div className="font-workSans text-skin-base font-semibold tracking-title text-base mr-1">
          <img src={bank} />
        </div>
        <div className="font-workSans text-skin-base font-semibold tracking-title text-base">
          My accounts
        </div>
      </div>
      <div className="py-3 flex flex-wrap items-center mb-4">
        {uniqueAccounts?.map((element: Account, i) => {
          const isActive = element.account_id === activeAccount?.account_id;

          return (
            <FilterButton
              label={element.name}
              key={i}
              isActive={isActive}
              onClick={() => {
                if (onClick) {
                  onClick(element);
                }
              }}
              id={`${i}`}
            />
          );
        })}
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mb-6"></div>
      <div className="flex flex-row justify-start items-center">
        <div className="font-workSans text-skin-base font-semibold tracking-title text-base mr-1">
          <FiCalendar />
        </div>
        <div className="font-workSans text-skin-base font-semibold tracking-title text-base">
          Date
        </div>
      </div>
      <div className="py-3 flex flex-wrap items-center mb-4">
        {dateFilters?.map((element: any, i: any) => {
          const isActive = element.id === activeDateFilter.id;

          return (
            <FilterButton
              label={element.name}
              key={i}
              isActive={isActive}
              onClick={() => {
                if (onClick) {
                  onClick(element);
                }
                setActiveDateFilter(element);
              }}
              id={`${i}`}
            />
          );
        })}
      </div>
      <div className="mb-6">
        <MainButton title="Apply" click={() => navigate("/cashflow")} />
      </div>
    </div>
  );
};

export default InsightsFilters;
