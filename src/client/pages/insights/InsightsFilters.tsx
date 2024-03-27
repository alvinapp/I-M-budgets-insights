import React, { useState, useEffect } from "react";
import bank from "../../assets/images/bank.svg";
import FilterButton from "../components/FilterButton";
import Account from "client/models/Account";
import { FiCalendar } from "react-icons/fi";
import MainButton from "../components/MainButton";
import { dateFilters } from "client/utils/MockData";
import useInsightsStore from "client/store/insightsStore";
import CustomDateRangePicker from "../components/custom-date-picker/CustomerDateRangePicker";
import {
  endOfMonth,
  format,
  isSameDay,
  isSameMonth,
  isSameYear,
  startOfMonth,
  subMonths,
} from "date-fns";
interface InsightsFiltersProps {
  accounts: any; // replace 'any' with the actual type
  activeAccount: any; // replace 'any' with the actual type
  onClick: any; // replace 'any' with the actual type
  closeBottomSheet: any; // replace 'any' with the actual type
}
const InsightsFilters = ({
  accounts,
  activeAccount,
  onClick,
  closeBottomSheet,
}: InsightsFiltersProps) => {
  const insightsStore = useInsightsStore.getState();
  const [activeDateFilter, setActiveDateFilter] = useState({
    id: insightsStore.insightsDateFilterId,
    name: insightsStore.insightsDateFilterName,
  });
  const [update, setUpdate] = useState(false);
  const [activeAccountName, setActiveAccountName] = useState(
    insightsStore.insightsActiveInstitutionName
  );

  useEffect(() => {
    setActiveDateFilter({
      id: insightsStore.insightsDateFilterId,
      name: insightsStore.insightsDateFilterName,
    });
    setActiveAccountName(insightsStore.insightsActiveInstitutionName);
  }, [update]);

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

  const uniqueAccounts = [
    ...new Map(
      accounts?.map((account: { name: any }) => [account.name, account])
    ).values(),
  ];
  uniqueAccounts.unshift(allAccounts);

  const selectedDateFilterName = insightsStore.insightsDateFilterName;

  const handleAccountSelection = (selectedAccount: Account) => {
    setUpdate(!update);
    // Update insights store with the selected account details
    useInsightsStore
      .getState()
      .setInsightsActiveInstitutionId(selectedAccount?.id ?? null);
    useInsightsStore
      .getState()
      .setInsightsActiveInstitutionName(
        selectedAccount?.name ?? "All accounts"
      );
  };

  const handleDateFilterSelection = (selectedFilter: any) => {
    setUpdate(!update);
    // Now, calculate the date range based on the selected filter
    const { formattedStartDate, formattedEndDate } =
      calculateDateRange(selectedFilter);
    useInsightsStore
      .getState()
      .setInsightsStartDate(new Date(formattedStartDate));
    useInsightsStore.getState().setInsightsEndDate(new Date(formattedEndDate));
    useInsightsStore.getState().setInsightsDateFilterName(selectedFilter.name);
  };

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
          <img src={bank} alt="Bank" />
        </div>
        <div className="font-custom text-skin-base font-medium tracking-title text-base">
          My accounts
        </div>
      </div>
      <div className="py-3 flex flex-wrap items-center mb-4">
        {uniqueAccounts.map((element: any, i) => {
          const id = i.toString(); // Convert index to string for id

          const isActive =
            id === "all"
              ? isAllAccountsActive
              : element.account_id === activeAccount?.account_id;

          return (
            <FilterButton
              label={element.name}
              key={i}
              isActive={activeAccountName === element.name || isActive}
              onClick={() => {
                if (onClick) {
                  onClick(element);
                  handleAccountSelection(element);
                }
              }}
              id={id}
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
        {dateFilters?.map((element: any, i: any) => (
          <FilterButton
            label={element.name}
            key={i}
            isActive={element.name === selectedDateFilterName}
            onClick={() => handleDateFilterSelection(element)}
            id={element.id.toString()}
          />
        ))}
        <CustomDateRangePicker
          onDateRangeSelect={(date) => {
            if (date && date.start && date.end) {
              const dateFilterName = checkDateRange(date.start, date.end);
              if (dateFilterName) {
                insightsStore.setInsightsDateFilterName(dateFilterName);
              } else {
                insightsStore.setInsightsDateFilterName(
                  renderInputValue(date.start, date.end)
                );
              }
              insightsStore.setInsightsStartDate(date.start);
              insightsStore.setInsightsEndDate(date.end);
            }
          }}
          disabled={false}
          startDate={
            insightsStore.insightsStartDate
              ? format(insightsStore.insightsStartDate, "yyyy-MM-dd")
              : ""
          }
          endDate={
            insightsStore.insightsEndDate
              ? format(insightsStore.insightsEndDate, "yyyy-MM-dd")
              : ""
          }
          lastUpdatedEnv={"local"}
          placeholder={"Custom date"}
          isActive={false}
          restrictToCurrentMonth={false}
        />
      </div>
      <div className="mb-6">
        <MainButton
          title="Apply"
          click={() => {
            useInsightsStore.getState().setInsightsLoading(true);
            closeBottomSheet();
            useInsightsStore.getState().setInsightsLoading(false);
          }}
        />
      </div>
    </div>
  );
};

export default InsightsFilters;

const renderInputValue = (startDisplay: any, endDisplay: any): string => {
  const formattedStart = startDisplay
    ? isSameYear(startDisplay, endDisplay) &&
      isSameMonth(startDisplay, endDisplay)
      ? format(startDisplay, "MMM, d")
      : format(startDisplay, "MMM d, yyyy")
    : "";
  const formattedEnd = endDisplay ? format(endDisplay, "MMM d, yyyy") : "";

  return formattedStart && formattedEnd
    ? `${formattedStart} - ${formattedEnd}`
    : "";
};

const checkDateRange = (startDate: Date, endDate: Date) => {
  const today = new Date();
  const currentMonthStart = startOfMonth(today);
  const currentMonthEnd = endOfMonth(today);
  const lastMonthStart = startOfMonth(subMonths(today, 1));
  const lastMonthEnd = endOfMonth(subMonths(today, 1));

  if (
    isSameDay(startDate, currentMonthStart) &&
    isSameDay(endDate, currentMonthEnd)
  ) {
    return "This month";
  } else if (
    isSameDay(startDate, lastMonthStart) &&
    isSameDay(endDate, lastMonthEnd)
  ) {
    return "Last month";
  } else {
    return false; // Not exactly matching the start and end of the current or last month
  }
};
