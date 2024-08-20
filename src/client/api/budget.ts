import { IConfig } from "client/store/configuration";
import { fetchData, postData } from "./api";
import * as Sentry from "@sentry/browser";
import { debounce } from "client/utils/Formatters";

//save category budgets
export const saveBudget = async ({
  configuration,
  data,
}: {
  configuration: IConfig;
  data: any;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/batch_micros/`,
      token: configuration.token,
      publicKey: configuration.publicKey,
      data: data,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

const fetchBudgetCategories = async ({
  configuration,
  start_date,
  end_date,
}: {
  configuration: IConfig;
  start_date?: string;
  end_date?: string;
}) => {
  try {
    let res;
    const endpoint =
      start_date && end_date
        ? `/goals/batch_micros/?start_date=${start_date}&end_date=${end_date}`
        : `/goals/batch_micros/`;

    res = await fetchData({
      endpoint,
      token: configuration.token,
      publicKey: configuration.publicKey,
    });

    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

const debouncedFetchBudgetCategories = debounce(fetchBudgetCategories, 300);

export { debouncedFetchBudgetCategories as fetchBudgetCategories };

const fetchMacros = async ({ configuration }: { configuration: IConfig }) => {
  try {
    const res = await fetchData({
      endpoint: `/goals/macros/`,
      token: configuration.token,
      publicKey: configuration.publicKey,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

const debouncedFetchMacros = debounce(fetchMacros, 300);

export { debouncedFetchMacros as fetchMacros };

const fetchBudgetCategoriesTransactions = async ({
  configuration,
  start_date,
  end_date,
  microgoalId,
}: {
  configuration: IConfig;
  start_date?: string;
  end_date?: string;
  microgoalId?: number;
}) => {
  try {
    const res = await fetchData({
      endpoint: `/goals/micros/micro_goal/transactions/?micro_goal_id=${microgoalId}&start_date=${start_date}&end_date=${end_date}`,
      token: configuration.token,
      publicKey: configuration.publicKey,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

const debouncedFetchBudgetCategoriesTransactions = debounce(
  fetchBudgetCategoriesTransactions,
  300
);

export { debouncedFetchBudgetCategoriesTransactions as fetchBudgetCategoriesTransactions };

const checkIfUserHasMicros = async ({
  configuration,
  token,
}: {
  configuration: IConfig;
  token: string;
}) => {
  try {
    const res = await fetchData({
      endpoint: `/goals/micros/check/`,
      token: token,
      publicKey: configuration.publicKey,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

const debouncedCheckIfUserHasMicros = debounce(checkIfUserHasMicros, 300);

export { debouncedCheckIfUserHasMicros as checkIfUserHasMicros };
