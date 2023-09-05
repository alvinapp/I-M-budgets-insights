import * as Sentry from "@sentry/browser";

import { IConfig } from "client/store/configuration";
import { fetchData } from "client/api/api";

const getAccounts = async (configuration: IConfig) => {
  try {
    const result = await fetchData({
      endpoint: "/users/",
      token: configuration.token,
      publicKey: configuration.publicKey,
    });
    return result.external_linked_accounts.filter(
      (element: any) => element.is_linked === true
    );
  } catch (reason: any) {
    Sentry.captureException(reason);
    return Promise.reject(reason);
  }
};

export default getAccounts;
