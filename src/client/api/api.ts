import * as Sentry from "@sentry/browser";

declare var AppConfig: AppConfig;

const get = async ({
  endpoint,
  token,
  params,
  publicKey,
}: {
  endpoint: string;
  params?: object;
  token?: string | null;
  publicKey?: string | null;
}) => {
  const domain = `${AppConfig.API_URL}${endpoint.replace("//", "/")}`;
  const url = params ? domain + new URLSearchParams({ ...params }) : domain;
  var headers = {
    "Content-Type": "application/json",
    cache: "force-cache",
  };
  if (publicKey) headers = { ...headers, ...{ sdk_key: publicKey } };
  if (token) headers = { ...headers, ...{ Authorization: `Bearer ${token}` } };
  try {
    const response: any = await fetch(url, {
      method: "GET",
      credentials: "omit",
      headers: headers,
    });
    return response.json();
  } catch (error) {
    // console.debug('get', JSON.stringify({url, headers, params}));
    Sentry.captureException(error);
    return Promise.reject(error);
  }
};

async function post({
  endpoint,
  token,
  data = {},
  publicKey,
}: {
  endpoint: string;
  token?: string | null;
  data: any;
  publicKey?: string | null;
}) {
  var headers = {
    "Content-Type": "application/json",
  };
  if (token) headers = { ...headers, ...{ Authorization: `Bearer ${token}` } };
  if (publicKey) headers = { ...headers, ...{ sdk_key: publicKey } };
  const request: RequestInit = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "omit",
    headers: headers,
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${AppConfig.API_URL}${endpoint}`, request);
    return response.json();
  } catch (error) {
    // console.debug('post', JSON.stringify(request));
    Sentry.captureException(error);
    return Promise.reject(error);
  }
}

async function put({
  endpoint,
  token,
  data = {},
  publicKey,
}: {
  endpoint: string;
  token?: string | null;
  data: any;
  publicKey?: string | null;
}) {
  var headers = {
    "Content-Type": "application/json",
  };
  if (token) headers = { ...headers, ...{ Authorization: `Bearer ${token}` } };
  if (publicKey) headers = { ...headers, ...{ sdk_key: publicKey } };
  const request: RequestInit = {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "omit",
    headers: headers,
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${AppConfig.API_URL}${endpoint}`, request);
    return response.json();
  } catch (error) {
    Sentry.captureException(error);
    return Promise.reject(error);
  }
}

const deleting = async ({
  endpoint,
  token,
  params,
  publicKey,
}: {
  endpoint: string;
  params?: object;
  token?: string | null;
  publicKey?: string | null;
}) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`${AppConfig.API_URL}${endpoint.replace("//", "/")}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export {
  get as fetchData,
  post as postData,
  put as putData,
  deleting as deleteData,
};
