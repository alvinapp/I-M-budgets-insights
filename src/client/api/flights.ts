import { IConfig, useConfigurationStore } from "client/store/configuration";
import useFlightStore from "client/store/flightStore";
import { fetchData, postData } from "./api";
import * as Sentry from "@sentry/browser";
export const searchCities = async ({
  keyword,
  configuration,
}: {
  keyword?: string;
  configuration: IConfig;
}) => {
  try {
    const res = await fetchData({
      endpoint: `/flight_booking/city-search?keyword=${keyword}`,
      token: configuration.token,
      publicKey: configuration.publicKey,
    });
    return res.data;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
export const searchFlights = async ({
  configuration,
  data,
}: {
  configuration: IConfig;
  data: any;
}) => {
  try {
    const res = await postData({
      endpoint: "/flight_booking/search",
      token: configuration.token,
      data: data,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
export const confirmBooking = async ({
  configuration,
  data,
}: {
  configuration: IConfig;
  data: any;
}) => {
  try {
    const res = await postData({
      endpoint: "/flight_booking/book",
      token: configuration.token,
      data: data,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
//Fetch recent booked flight using ID
export const findBookedFlight = async ({
  flightBookingId,
  configuration,
}: {
  flightBookingId: string;
  configuration: IConfig;
}) => {
  try {
    const res = await fetchData({
      endpoint: `/flight_booking/flight-booked-details?flightId=${flightBookingId}`,
      token: configuration.token,
      publicKey: configuration.publicKey,
    });
    return res.data;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
