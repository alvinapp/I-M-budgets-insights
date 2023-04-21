import React from "react";
import { FiCornerUpRight, FiDownload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { BookingInfo } from "../components/book-flight/BookingInfo";
import { FlightDetailsCard } from "../components/book-flight/FlightDetailsCard";
import FlightNumber from "../components/book-flight/FlightNumber";
import { HeadPhoneButton } from "../components/book-flight/HeadPhoneButton";
import CloseButton from "../components/CloseButton";
import NavBar from "../components/NavBar";
import flightPath from "client/assets/images/flight/flightpath.png";
import useFlightStore from "client/store/flightStore";
import useUserStore from "client/store/userStore";
const ViewBookedFlightDetails = () => {
  const flightStore = useFlightStore((state: any) => state);
  const userStore = useUserStore((state: any) => state);
  const { email, first_name, last_name, country } = userStore.user;
  const {
    flightConfirmationId,
    departureDatetime,
    departureLocationIataCode,
    currency,
    totalDuration,
    arrivalDatetime,
    arrivalAircraftCode,
    departureCarrierCode,
    departureAircraftCode,
    arrivalLocationIataCode,
  } = flightStore.bookedFlightInfo;
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen relative no-scrollbar bg-skin-accent2">
      <div className="h-1/4 absolute top-0 left-0 right-0">
        <div className="relative">
          <div className="absolute top-72 left-0 right-0 flex flex-row rounded-full bg-skin-base py-2 px-3 mx-18 justify-center shadow-card">
            <FiCornerUpRight color="#6F89A5" size="1rem" />
            <div className="font-poppins text-xs text-skin-base ml-2 tracking-longtext">
              Directions to departure station
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 absolute top-0 right-0 left-0 px-3.5">
        <NavBar
          children={
            <div className="flex flex-row justify-between items-center">
              <BackButton
                background="bg-skin-base"
                onClick={() => {
                  navigate(-3);
                }}
              />
              <HeadPhoneButton background="bg-skin-base" onClick={() => {}} />
            </div>
          }
        />
      </div>
      <div className="rounded-t-3xl h-full w-screen bg-skin-base absolute top-80 right-0 left-0 mt-3">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mt-7 ml-8 mr-3.5">
            <div className="flex flex-col">
              <FlightNumber
                title={departureAircraftCode ?? ""}
                fontSize="text-2xl"
              />
            </div>
            <div className="flex flex-col">
              <div className="rounded-full flex justify-center items-center bg-skin-secondaryWithOpacity h-11 w-11">
                <FiDownload color="#6F89A5" size="1.5rem" />
              </div>
            </div>
          </div>
          <div className="mx-10 my-8 flex flex-col">
            <div className="font-workSans text-base tracking-title font-semibold text-skin-subtitle mb-1">
              Boarding station
            </div>
            <FlightDetailsCard
              acronym={departureLocationIataCode ?? ""}
              location=""
              terminal=""
              departure_arrival="Departure"
              time={
                departureDatetime ? departureDatetime.substring(11, 16) : ""
              }
              flight_time={totalDuration ? totalDuration.toLowerCase() : ""}
            />
            <div className="mb-5 mt-5 h-7 flex flex-row justify-center">
              <img src={flightPath} className="" />
            </div>
            <div className="font-medium font-poppins text-tiny text-skin-subtitle tracking-listtile_subtitle flex justify-center mb-3">
              {totalDuration ? totalDuration.toLowerCase() : ""}
            </div>
            <div className="font-workSans text-base tracking-title font-semibold text-skin-subtitle mb-1">
              Arrival station
            </div>
            <FlightDetailsCard
              acronym={arrivalLocationIataCode}
              location=""
              terminal=""
              departure_arrival="Arrival"
              time={arrivalDatetime ? arrivalDatetime.substring(11, 16) : ""}
              flight_time={totalDuration ? totalDuration.toLowerCase() : ""}
            />
          </div>
          <div className="border bottom-4 border-skin-accent mx-13 mb-4.5"></div>
          <div className="font-workSans text-base tracking-title font-semibold mx-10 text-skin-subtitle mb-4">
            Booking info
          </div>
          <div className="mx-10">
            <BookingInfo
              label="Booking id"
              caption={flightConfirmationId ?? ""}
            />
            <BookingInfo label="Name" caption={`${first_name} ${last_name}`} />
            <BookingInfo label="Phone" caption={`(818) 852-2166`} />
            <BookingInfo label="Carrier" caption={departureCarrierCode ?? ""} />
            <BookingInfo
              label="Travel date"
              caption={
                departureDatetime ? departureDatetime.substring(0, 10) : ""
              }
            />
            <BookingInfo
              label="Travel time"
              caption={`${
                departureDatetime ? departureDatetime.substring(11, 16) : ""
              }-${arrivalDatetime ? arrivalDatetime.substring(11, 16) : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewBookedFlightDetails;
