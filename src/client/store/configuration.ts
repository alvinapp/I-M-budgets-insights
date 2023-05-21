import { create } from "zustand";

declare var AppConfig: AppConfig;

interface IConfig {
  publicKey: any;
  token?: string | null;
  identifier?: string | null;
  monoPubKey?: string | null;
  settings: string;
}

const configurationInitialState: IConfig = {
  publicKey: null,
  token: AppConfig.TOKEN,
  identifier: AppConfig.IDENTIFIER,
  monoPubKey: null,
  settings: '{"balanceView":true,"cardView":true,"transactionsView":true}',
};

const useConfigurationStore = create((set) => ({
  configuration: configurationInitialState,
  init: (config: IConfig) => {
    return set((state: any) => {
      const currentState = state.configuration as IConfig;
      const results = {
        configuration: {
          publicKey: config.publicKey || currentState.publicKey,
          token: config.token || currentState.token,
          identifier: config.identifier || currentState.identifier,
          monoPubKey: config.monoPubKey || currentState.monoPubKey,
          settings: config.settings || currentState.settings,
        },
      };
      return results;
    });
  },
  setMonoPubKey: (key: string) => {
    return set((state: any) => {
      const results = {
        configuration: { ...state.configuration, monoPubKey: key },
      };
      return results;
    });
  },
  setToken: (token: string) => {
    return set((state: any) => {
      const results = {
        configuration: { ...state.configuration, token },
      };
      return results;
    });
  },
}));

export { IConfig, configurationInitialState, useConfigurationStore };
