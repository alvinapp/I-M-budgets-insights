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
}: {
  configuration: IConfig;
}): Promise<Array<MicroGoalTotal>> => {
  try {
    const res = await fetchData({
      endpoint: "/goals/micros/totals/",
      token: configuration.token,
    });

    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
