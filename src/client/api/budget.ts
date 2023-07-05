import { IConfig } from "client/store/configuration";
import { postData } from "./api";
import * as Sentry from "@sentry/browser";
//Fetch all categories
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
