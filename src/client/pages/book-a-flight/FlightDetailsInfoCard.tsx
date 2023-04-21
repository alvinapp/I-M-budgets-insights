import React from "react";
import flightPath from "client/assets/images/flight/flightpath.png";
import FlightNumber from "../components/book-flight/FlightNumber";
type FlightDetailsInfoCardProps = {
  depatureTime?: string;
  arrivalTime?: string;
  depatureLocation?: string;
  arrivalLocation?: string;
  flightTime?: string;
  flightNumber?: string;
  amount?: string;
  onClick?: () => void;
  currency?: string;
};
export const FlightDetailsInfoCard = ({
  depatureLocation,
  depatureTime,
  arrivalLocation,
  arrivalTime,
  flightTime,
  flightNumber,
  amount,
  onClick,
  currency,
}: FlightDetailsInfoCardProps) => {
  // const peercentageDiscount = parseFloat(discount) * amount;
  return (
    <div className="flex flex-col mb-3" onClick={onClick}>
      <div className="flex flex-row rounded-lg shadow-card px-3.5 pt-4 pb-8 justify-between">
        <div className="flex flex-col items-center">
          <div className="font-workSans font-semibold text-xl text-skin-base tracking-title">
            {depatureTime}
          </div>
          <div className="font-poppins text-tiny font-medium tracking tracking-listtile_subtitle text-skin-subtitle">
            {depatureLocation}
          </div>
        </div>
        <div className="flex flex-col justify-center px-2">
          <div className="mb-1">
            <img src={flightPath} />
          </div>
          <div className="font-medium font-poppins text-tiny tracking-listtile_subtitle text-skin-subtitle text-center">
            {flightTime}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-workSans font-semibold text-xl text-skin-base tracking-title">
            {arrivalTime}
          </div>
          <div className="font-poppins text-tiny font-medium tracking tracking-listtile_subtitle text-skin-subtitle">
            {arrivalLocation}
          </div>
        </div>
      </div>
      <div className="mt-1 rounded-lg shadow-card px-3.5 py-2 flex flex-row justify-between">
        <FlightNumber title={flightNumber} />
        <div className="flex flex-col">
          <div className="flex flex-row  items-center">
            {/* <div className="font-poppins text-tiny font-semibold tracking-longest_text text-skin-subtitle mr-2 line-through opacity-50">
              {`${currency}${discount}`}
            </div> */}
            <div className="font-workSans text-tiny font-semibold tracking-title text-skin-base rounded-lg bg-skin-accent2 flex items-center justify-center px-2.5 py-3">
              <div> {`${currency} ${amount}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
