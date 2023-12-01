import { IConfig } from "client/store/configuration";
import { fetchData, postData } from "./api";
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

export const getMicroDetailsViewData = async ({
  configuration,
  linkedAccountId,
  startDate,
  endDate,
}: {
  configuration: IConfig;
  linkedAccountId: any;
  startDate: any;
  endDate: any;
}) => {
  try {
    const res = await postData({
      endpoint: "/transactions/micro_details_view",
      token: configuration.token,
      publicKey: configuration.publicKey,
      data: JSON.stringify({
        linked_account_id: linkedAccountId,
        start_date: startDate,
        end_date: endDate,
      }),
    });
    return res;
  } catch (reason) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
