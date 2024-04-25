import { MicroGoalTotal } from "client/api/micros";
import { MicroGoal } from "client/models/MicroGoal";
import { IConfig } from "client/store/configuration";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { validateLocaleAndSetLanguage } from "typescript";

export const dateFormat = (date: Date, includeYear?: boolean) => {
  const date1 = new Date(Date.now());
  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;
  // Calculating the time difference between two dates
  const diffInTime = date.getTime() - date1.getTime();
  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);
  if (diffInDays == 0) {
    return "Today";
  }
  if (diffInDays == -1) {
    return "Yesterday";
  }
  const dateProperties: any = includeYear
    ? {
        day: "numeric",
        year: "numeric",
        month: "short",
      }
    : {
        weekday: "long",
        month: "short",
        day: "numeric",
      };
  let formattedDate = date
    .toLocaleDateString("en-au", dateProperties)
    .split(" ");
  const resultDate =
    formattedDate.slice(0, 1) +
    " " +
    formattedDate.slice(1, 2) +
    " " +
    formattedDate.slice(2, 3);
  return resultDate;
};
// check for NAN
export const checkNAN = (value: any) => {
  if (Number.isNaN(value)) {
    return 0;
  } else {
    return value;
  }
};
export const checkIfDebitCredit = (value: string) => {
  if (value === "debit") {
    return "-";
  } else if (value === "credit") {
    return "+";
  } else {
    return "";
  }
};
//Hide account number

export const applyAsterix = ({
  str,
  mask,
  n = 1,
}: {
  str: string;
  mask: any;
  n: number;
}) => {
  let newval = "";
  let unMaskedString = ("" + str).slice(0, -n).replace(/./g, mask);
  unMaskedString = unMaskedString.replace(/\s/g, "");
  for (var i = 0; i < unMaskedString.length; i++) {
    //add space if modulus of 4 is 0
    if (i % 3 == 0 && i > 0) newval = newval.concat(" ");
    newval = newval.concat(unMaskedString[i]);
  }

  return newval + " " + ("" + str).slice(-n);
};
//Check if a date is yesterday

export const isYesterday = (date: Date) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  // 👇️ Yesterday's date

  if (yesterday.toDateString() === date.toDateString()) {
    return true;
  }

  return false;
};
export const convertDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getUTCFullYear().toString();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = date.getUTCMilliseconds().toString().padStart(3, "0");
  const timezoneOffset = date.getTimezoneOffset();
  const timezoneHours = Math.abs(Math.floor(timezoneOffset / 60))
    .toString()
    .padStart(2, "0");
  const timezoneMinutes = Math.abs(timezoneOffset % 60)
    .toString()
    .padStart(2, "0");
  const timezoneSign = timezoneOffset < 0 ? "+" : "-";
  const timezone = `${timezoneSign}${timezoneHours}:${timezoneMinutes}`;
  return `${year}-${month}-${day}`;
};
export const nthNumber = (number: any) => {
  return number > 0
    ? ["th", "st", "nd", "rd"][
        (number > 3 && number < 21) || number % 10 > 3 ? 0 : number % 10
      ]
    : "";
};
export const capitalize = (s: any) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const formatNumber = (num: any) => {
  if (num > 1000000) {
    return (num / 1000000).toFixed(0).replace(/\.0$/, "") + "m";
  } else if (num > 1000) {
    return (num / 1000).toFixed(0).replace(/\.0$/, "") + "k";
  } else {
    return num;
  }
};

export const calculateSpending = (totalExpenditure: any, totalBudget: any) => {
  // Get current date
  const today = new Date();
  const currentDay = today.getDate();

  // Calculate number of days in the current month
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  // Calculate daily budget
  const dailyBudget = totalBudget / daysInMonth;

  // Calculate total budget that should be spent by the current day
  const expectedExpenditure = checkNAN(dailyBudget * currentDay);

  // Calculate the percentage of the month that has passed
  const monthProgress = checkNAN((currentDay / daysInMonth) * 100);

  // Calculate the percentage of actual expenditure progress in terms of total budget
  let expenditureProgress = checkNAN((totalExpenditure / totalBudget) * 100);

  // Calculate the percentage of expected expenditure progress in terms of total budget
  const expectedExpenditureProgress = checkNAN(
    (expectedExpenditure / totalBudget) * 100
  );
  if (expenditureProgress > 100) {
    expenditureProgress = 100;
  }

  return {
    expectedExpenditure,
    monthProgress,
    expenditureProgress,
    expectedExpenditureProgress,
  };
};

export const navigateWithProps = (
  history: any,
  targetRoute: any,
  props: any
) => {
  history.push(targetRoute, props);
};

export function calculateMacroTypeTotals(data: any[]) {
  // const totals = {};

  // Iterate through the data array
  const totals: { [key: string]: number } = {};

  for (const item of data) {
    const { macro_name, total_transactions } = item;

    // If the macroType already exists in the totals object, add the amount to it
    if (totals[macro_name]) {
      totals[macro_name] += total_transactions;
    } else {
      // If the macroType doesn't exist, initialize it with the amount
      totals[macro_name] = total_transactions;
    }
  }

  // Convert the totals object into an array of objects
  const result = Object.entries(totals).map(([macroType, total]) => ({
    macroType,
    total,
  }));

  return result;
}

//Function to show the contribution time

interface GoalCompletionResult {
  goalCompletionString: string;
  estimatedCompletionDate: string;
}

function formatCurrency(value: number): string {
  if (value >= 1e6) {
    return `${(value / 1e6).toFixed(1)}m`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}k`;
  }
  return value.toFixed(0).toString();
}

function calculateEstimatedCompletionDate(
  startDate: Date,
  monthsToAdd: number
): string {
  const resultDate = new Date(startDate);
  resultDate.setMonth(resultDate.getMonth() + monthsToAdd);

  return resultDate.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getGoalCompletionString(
  monthly_contribution: number,
  target_amount: number,
  goal_creation_date: Date
): GoalCompletionResult {
  const totalMonthsNeeded = Math.ceil(target_amount / monthly_contribution);

  const estimatedCompletionDate = calculateEstimatedCompletionDate(
    goal_creation_date,
    totalMonthsNeeded
  );

  const monthlyContributionFormatted = formatCurrency(monthly_contribution);
  const weeklyContributionFormatted = formatCurrency(
    monthly_contribution / 4.34524
  );
  const targetAmountFormatted = formatCurrency(target_amount);

  const goalCompletionString = `🙌🏼 By saving ${monthlyContributionFormatted}/month or ${weeklyContributionFormatted}/week, you'll achieve your goal by the next ${totalMonthsNeeded} months.`;

  return {
    goalCompletionString,
    estimatedCompletionDate,
  };
}

export const fetchData = async (
  queryKey: string,
  fetchFunction: {
    ({
      configuration,
      start_date,
      end_date,
    }: {
      configuration: IConfig;
      start_date?: string | undefined;
      end_date?: string | undefined;
    }): Promise<any>;
    ({
      configuration,
      start_date,
      end_date,
    }: {
      configuration: IConfig;
      start_date?: string | undefined;
      end_date?: string | undefined;
    }): Promise<MicroGoalTotal[]>;
    ({
      configuration,
      start_date,
      end_date,
    }: {
      configuration: IConfig;
      start_date?: string | undefined;
      end_date?: string | undefined;
    }): Promise<any>;
    ({
      configuration,
      start_date,
      end_date,
    }: {
      configuration: IConfig;
      start_date?: string | undefined;
      end_date?: string | undefined;
    }): Promise<MicroGoalTotal[]>;
    (arg0: { configuration: any; start_date: any; end_date: any }): any;
  },
  config: IConfig,
  formattedStartDate: string,
  formattedEndDate: string,
  setDataCallback: {
    (data: MicroGoal[]): void;
    (data: MicroGoal[]): void;
    (arg0: any): void;
  }
) => {
  try {
    const result = await fetchFunction({
      configuration: config,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
    });
    setDataCallback(result);
  } catch (error) {}
};

// Set default income value based on country and currency

export const setDefaultIncomeValue = (currency: string) => {
  const defaultValues = {
    Nigeria: 10000,
    Kenya: 5000,
  };
  const currencySymbol = useCurrencySettingsStore((state: any) => state);
  if (currencySymbol.currencySymbol === currency) {
    return defaultValues.Nigeria;
  } else {
    return defaultValues.Kenya;
  }
};

export const formatToLocaleString = (value: number) => {
  return Number(value).toLocaleString("en-US");
};
