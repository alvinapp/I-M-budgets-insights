import { IConfig } from "client/store/configuration";
import { fetchData } from "./api";
import * as Sentry from "@sentry/browser";
//Fetch all transactions
export const getCashFlow = async ({
  configuration,
}: {
  configuration: IConfig;
}) => {
  try {
    const res = await fetchData({
      endpoint: `/transactions/cash_flow/`,
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