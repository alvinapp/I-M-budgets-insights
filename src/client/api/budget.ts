import { IConfig } from "client/store/configuration";
import { fetchData, postData } from "./api";
import * as Sentry from "@sentry/browser";
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

export const fetchBudgetCategories = async ({
  configuration,
  macrogoal_id,
}: {
  configuration: IConfig;
  macrogoal_id: number;
}) => {
  try {
    const res = await fetchData({
      endpoint: `/goals/macros/${macrogoal_id}/micros/`,
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
