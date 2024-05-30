import { IConfig } from "client/store/configuration";
import { fetchData, postData } from "./api";
import * as Sentry from "@sentry/browser";
import { debounce } from "client/utils/Formatters";
//Fetch all transactions
const getCashFlow = async ({
  configuration,
  start_date,
  end_date,
  linkedAccountId,
}: {
  configuration: IConfig;
  start_date?: string;
  end_date?: string;
  linkedAccountId?: any;
}) => {
  try {
    let res;
    let endpoint = "/transactions/cash_flow/";
    if (start_date && end_date) {
      endpoint += `?start_date=${start_date}&end_date=${end_date}`;
    }
    if (linkedAccountId) {
      endpoint += `&linked_account_id=${linkedAccountId}`;
    }
    res = await fetchData({
      endpoint: endpoint,
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

const debouncedGetCashFlow = debounce(getCashFlow, 5000);

export { debouncedGetCashFlow as getCashFlow };

const getMicroDetailsViewData = async ({
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

const debouncedGetMicroDetailsViewData = debounce(
  getMicroDetailsViewData,
  5000
);

export { debouncedGetMicroDetailsViewData as getMicroDetailsViewData };

const enrichTransactions = async ({
  configuration,
  start_date,
  end_date,
}: {
  configuration: IConfig;
  start_date?: string;
  end_date?: string;
}) => {
  try {
    if (start_date && end_date) {
      const res = await postData({
        endpoint: `/transactions/enrich_data/?start_date=${start_date}&end_date=${end_date}`,
        token: configuration.token,
        data: {},
      });
      return res;
    } else {
      const res = await postData({
        endpoint: `/transactions/enrich_data/`,
        token: configuration.token,
        data: {},
      });
      return res;
    }
  } catch (reason) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

const debouncedEnrichTransactions = debounce(enrichTransactions, 5000);

export { debouncedEnrichTransactions as enrichTransactions };
