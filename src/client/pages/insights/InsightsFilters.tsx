import React, { useState } from "react";
import bank from "../../assets/images/bank.svg";
import FilterButton from "../components/FilterButton";
import Account from "client/models/Account";
import { FiCalendar } from "react-icons/fi";
import MainButton from "../components/MainButton";
import { dateFilters } from "client/utils/MockData";
import { useNavigate } from "react-router-dom";
import useCashflowVariablesStore from "client/store/cashFlowStore";
import useInsightsStore from "client/store/insightsStore";
type InsightsFiltersProps = {
  accounts?: Array<Account>;
  activeAccount?: Account;
  onClick?: (account: Account) => void;
  closeBottomSheet: () => void;
};
const InsightsFilters = ({
  accounts,
  activeAccount,
  onClick,
  closeBottomSheet,
}: InsightsFiltersProps) => {
  const [activeDateFilter, setActiveDateFilter] = useState({
    id: 0,
    name: "All time",
  });
  const [activeAccountName, setActiveAccountName] = useState(
    activeAccount?.name
  );
  const uniqueAccounts: Account[] | undefined = Array.from(
    new Set(accounts?.map((account) => account.name))
  )
    .map((name) => {
      return accounts?.find((account) => account.name === name);
    })
    .filter((account) => account) as Account[];
  const navigate = useNavigate();
  const isAllAccountsActive = !activeAccount;
  const calculateDateRange = (selectedFilter: any) => {
    const currentDate = new Date();
    let startDate = new Date();
    let endDate = new Date();

    switch (selectedFilter.id) {
      case 1: // This month
        startDate.setDate(1);
        break;
      case 2: // Last month
        startDate.setMonth(currentDate.getMonth() - 1, 1);
        endDate.setDate(0); // Last day of last month
        break;
      case 3: // Last 3 months
        startDate.setMonth(currentDate.getMonth() - 2, 1);
        break;
      case 4: // Last 6 months
        startDate.setMonth(currentDate.getMonth() - 5, 1);
        break;
      // Handle additional cases as needed
      default:
        // Custom date or All time, use default values
        startDate = new Date("2023-09-01");
        endDate = new Date("2023-11-30");
        break;
    }

    // Format dates as "YYYY-MM-DD"
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    return { formattedStartDate, formattedEndDate };
  };

  // Helper function to format a date as "YYYY-MM-DD"
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const allAccounts: Account = {
    id: -1,
    account_id: "all",
    account_number: "all",
    name: "All accounts",
    type: "all",
    balance: 0,
    is_linked: false,
    created_on: "N/A",
    created_at: "N/A",
    source: "N/A",
    transactions: {
      total_debit: 0,
      total_credit: 0,
    },
  };
  uniqueAccounts.unshift(allAccounts);
  return (
    <div className="flex flex-col mt-6 mx-4">
      <div className="flex flex-row justify-between items-center">
        <div className="text-xs font-primary font-medium text-skin-base tracking-longtext">
          Clear
        </div>
        <div className="font-custom text-skin-base font-medium tracking-title text-base">
          Filter by
        </div>
        <div className="flex flex-col"></div>
      </div>
      <div className="flex flex-row justify-start items-center mt-10">
        <div className="font-custom text-skin-base font-medium tracking-title text-base mr-1">
          <img src={bank} />
        </div>
        <div className="font-custom text-skin-base font-medium tracking-title text-base">
          My accounts
        </div>
      </div>
      <div className="py-3 flex flex-wrap items-center mb-4">
        {[
          ...uniqueAccounts.map((element: Account, i) => ({
            label: element.name,
            id: `${i}`,
          })),
        ].map((filter, i) => {
          const isActive =
            filter.id === "all"
              ? isAllAccountsActive
              : uniqueAccounts[parseInt(filter.id)].account_id ===
              activeAccount?.account_id;

          return (
            <FilterButton
              label={filter.label}
              key={i}
              isActive={activeAccountName === filter.label || isActive}
              onClick={() => {
                if (onClick) {
                  const selectedAccount = uniqueAccounts[parseInt(filter.id)];
                  onClick(selectedAccount);
                  setActiveAccountName(selectedAccount.name);
                }
              }}
              id={filter.id}
            />
          );
        })}
      </div>
      <div className="flex-grow h-px bg-skin-accent3 mb-6"></div>
      <div className="flex flex-row justify-start items-center">
        <div className="font-custom text-skin-base font-medium tracking-title text-base mr-1">
          <FiCalendar />
        </div>
        <div className="font-custom text-skin-base font-medium tracking-title text-base">
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
        <MainButton
          title="Apply"
          click={() => {
            useInsightsStore.getState().setInsightsLoading(true);
            const { formattedStartDate, formattedEndDate } =
              calculateDateRange(activeDateFilter);
            useInsightsStore.getState().setInsightsStartDate(new Date(formattedStartDate));
            useInsightsStore.getState().setInsightsEndDate(new Date(formattedEndDate));
            useInsightsStore.getState().setInsightsActiveInstitutionId(activeAccount?.id ?? null);
            useCashflowVariablesStore.getState().setCashflowVariables({
              startDate: formattedStartDate,
              endDate: formattedEndDate,
              accountName: activeAccountName || "All accounts",
              dateFilter: activeDateFilter.name,
            });
            closeBottomSheet();
            useInsightsStore.getState().setInsightsLoading(false);
          }}
        />
      </div>
    </div>
  );
};

export default InsightsFilters;
