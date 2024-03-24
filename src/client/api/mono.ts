import * as Sentry from "@sentry/browser";

import { IConfig } from "client/store/configuration";
import { fetchData, postData } from "client/api/api";

const getMonoPubKey = async (configuration: IConfig, country: string) => {
  return fetchData({
    endpoint: "/mono/pub-key/" + country + "/",
    publicKey: configuration.publicKey,
  }).catch((err) => {
    console.debug(JSON.stringify(err));
    Sentry.captureException(err);

    return Promise.reject(err);
  });
};

const postCode = async (
  configuration: IConfig,
  code: string,
  country: string
) => {
  return postData({
    endpoint: "/mono/code",
    token: configuration.token || null,
    data: {
      code: code,
      country: country,
    },
    publicKey: configuration.publicKey,
  }).catch((err) => {
    Sentry.captureException(err);

    return Promise.reject(err);
  });
};

const syncAccounts = async (configuration: IConfig, country: string) => {
  return postData({
    endpoint: "/mono/accounts/sync",
    token: configuration.token || null,
    data: {
      country: country,
    },
    publicKey: configuration.publicKey,
  }).catch((err) => {
    Sentry.captureException(err);

    return Promise.reject(err);
  });
};

const syncAccount = async (
  configuration: IConfig,
  account_id: string,
  country: string
) => {
  return postData({
    endpoint: "/mono/accounts/sync/" + account_id,
    token: configuration.token || null,
    data: {
      country: country,
    },
    publicKey: configuration.publicKey,
  }).catch((err) => {
    Sentry.captureException(err);

    return Promise.reject(err);
  });
};

// add /accounts/update/<string:account_id> POST
const updateAccount = async (
  configuration: IConfig,
  account_id: string,
  country: string
) => {
  return postData({
    endpoint: "/mono/accounts/update/" + account_id,
    token: configuration.token || null,
    data: {
      country: country,
    },
    publicKey: configuration.publicKey,
  }).catch((err) => {
    Sentry.captureException(err);

    return Promise.reject(err);
  });
};

export { postCode, getMonoPubKey, syncAccounts, syncAccount, updateAccount };
