import React from "react";
import bank from "../../assets/images/bank.svg";
import FilterButton from "../components/FilterButton";
import Account from "client/models/Account";
import Accounts from "client/models/Accounts";
import useAccountStore from "client/store/accountStore";
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
  const uniqueAccounts: Account[] | undefined = Array.from(
    new Set(accounts?.map((account) => account.name))
  )
    .map((name) => {
      return accounts?.find((account) => account.name === name);
    })
    .filter((account) => account) as Account[];
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
          {/* <img src={bank} /> */}
        </div>
        <div className="font-workSans text-skin-base font-semibold tracking-title text-base">
          My accounts
        </div>
      </div>
      <div className="whitespace-nowrap overflow-auto no-scrollbar py-3 flex flex-row items-center">
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
    </div>
  );
};

export default InsightsFilters;
