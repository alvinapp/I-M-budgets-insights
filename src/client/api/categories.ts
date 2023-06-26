import { IConfig } from "client/store/configuration";
import { fetchData } from "./api";
import * as Sentry from "@sentry/browser";
//Fetch all categories
export const getCategories = async ({
  configuration,
}: {
  configuration: IConfig;
}) => {
  try {
    const res = await fetchData({
      endpoint: `/categories`,
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
