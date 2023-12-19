import { IConfig } from "client/store/configuration";
import { fetchData } from "./api"; // Assuming this function exists
import * as Sentry from "@sentry/browser";

export interface MicroGoalTotal {
  name: string;
  amount: number;
  emoji: string;
  total_transactions: number;
  number_of_transactions: number;
}

export const fetchMicroGoalTotals = async ({
  configuration,
  start_date,
  end_date,
}: {
  configuration: IConfig;
  start_date?: string;
  end_date?: string;
}): Promise<Array<MicroGoalTotal>> => {
  try {
    let res;
    if (start_date && end_date) {
      res = await fetchData({
        endpoint: `/goals/micros/totals/?start_date=${start_date}&end_date=${end_date}`,
        token: configuration.token,
        publicKey: configuration.publicKey,
      });
    } else {
      res = await fetchData({
        endpoint: `/goals/micros/totals/`,
        token: configuration.token,
        publicKey: configuration.publicKey,
      });
    }

    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

export const fetchBudgetCategories = async ({
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
    if (start_date && end_date) {
      res = await fetchData({
        endpoint: `/goals/batch_micros/?start_date=${start_date}&end_date=${end_date}`,
        token: configuration.token,
        publicKey: configuration.publicKey,
      });
    } else {
      res = await fetchData({
        endpoint: `/goals/batch_micros/`,
        token: configuration.token,
        publicKey: configuration.publicKey,
      });
    }
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
