import { IConfig } from "client/store/configuration";
import { postData, putData } from "./api";
import * as Sentry from "@sentry/browser";

export const setMacros = async ({
  configuration,
  data,
}: {
  configuration: IConfig;
  data: {
    name: string;
    type_name: string;
    amount: number;
    percentage: number;
    share: number;
    reset_micros: boolean;
  };
}) => {
  try {
    const res = await postData({
      endpoint: "goals/macros",
      token: configuration.token,
      data: { ...data},
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
