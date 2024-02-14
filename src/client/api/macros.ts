import { IConfig } from "client/store/configuration";
import { fetchData, postData, putData } from "./api";
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
      data: { ...data },
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

export const getMacros = async ({
  configuration,
  start_date,
  end_date,
}: {
  configuration: IConfig;
  start_date?: string;
  end_date?: string;
}) => {
  try {
    let res;
    if (start_date && end_date) {
      res = await fetchData({
        endpoint: `/goals/macros/?start_date=${start_date}&end_date=${end_date}`,
        token: configuration.token,
      });
    } else {
      res = await fetchData({
        endpoint: `/goals/macros/`,
        token: configuration.token,
      });
    }
    // const res = await fetchData({
    //   endpoint: "/goals/macros",
    //   token: configuration.token,
    // });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
