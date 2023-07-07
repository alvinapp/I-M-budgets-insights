import { IConfig } from "client/store/configuration";
import { putData } from "./api";
import * as Sentry from "@sentry/browser";

export type GoalMacroType = "Wants" | "Essentials" | "Savings";

export interface GoalMacro {
  name: string;
  type_name: GoalMacroType;
  amount: number;
  percentage: number;
  share: number;
  reset_micros: boolean;
}

export const setMacro = async ({
  goalMacro,
  configuration,
}: {
  goalMacro: GoalMacro;
  configuration: IConfig;
}) => {
  try {
    const res = await putData({
      endpoint: "/goals/macros",
      token: configuration.token,
      data: goalMacro,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};