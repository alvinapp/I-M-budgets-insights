import { IConfig } from "client/store/configuration";
import { postData, putData } from "./api";
import * as Sentry from "@sentry/browser";


export const setIncome = async ({
  incomeAmount,
  configuration,
}: {
  incomeAmount: number;
  configuration: IConfig;
}) => {
  try {
    const res = await postData({
      endpoint: "/users/income",
      token: configuration.token,
      data: { amount: incomeAmount },
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

export const completeOnboarding = async ({
  completionTime,
  configuration,
}: {
  completionTime: Date,
  configuration: IConfig;
}) => {
  try {
    const res = await postData({
      endpoint: "/users/onboarded",
      token: configuration.token,
      data: { at: completionTime },
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
