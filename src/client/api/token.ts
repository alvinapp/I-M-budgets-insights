import * as Sentry from "@sentry/browser";

import { IConfig, useConfigurationStore } from "client/store/configuration";
import { postData } from "client/api/api";

const getToken = async (configuration: IConfig) => {
  const { identifier, publicKey } = configuration;
  if (!identifier || !publicKey)
    throw new Error("publicKey and identifier must be provided");
  const res = await postData({
    endpoint: "/users/create/",
    data: { email: identifier, sdk_key: publicKey },
  });
  return res;
};

export default getToken;
