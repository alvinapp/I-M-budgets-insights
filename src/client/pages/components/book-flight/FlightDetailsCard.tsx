import React from "react";

type FlightDetailsCardProps = {
  acronym?: string;
  location?: string;
  terminal?: string;
  departure_arrival?: string;
  time?: string;
  flight_time?: string;
};
export const FlightDetailsCard = ({
  acronym,
  location,
  terminal,
  departure_arrival,
  time,
  flight_time,
}: FlightDetailsCardProps) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <div className="font-semibold text-skin-base text-2xl font-workSans">
          {acronym}
        </div>
        <div className="font-medium text-skin-base text-tiny font-poppins tracking-listtile_subtitle">
          {location}
        </div>
        <div className="font-medium text-skin-base text-tiny font-poppins tracking-listtile_subtitle">
          {terminal}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="font-semibold text-skin-base text-2xl font-workSans">
          {time}
        </div>
        <div className="font-medium text-skin-base text-tiny font-poppins tracking-listtile_subtitle">
          {departure_arrival}
        </div>
        <div className="font-medium text-skin-base text-tiny font-poppins tracking-listtile_subtitle">
          {flight_time}
        </div>
      </div>
    </div>
  );
};
