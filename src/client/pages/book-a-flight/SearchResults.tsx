import useFlightStore from "client/store/flightStore";
import useUserStore from "client/store/userStore";
import { dateFormat } from "client/utils/Formatters";
import {
  FiArrowDown,
  FiCalendar,
  FiCornerDownRight,
  FiEdit2,
  FiTag,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ArrowBackButton from "../components/ArrowBack";
import { FilterPill } from "../components/book-flight/FilterPill";
import { FlightDetailsCard } from "../components/book-flight/FlightDetailsCard";
import { InfoBanner } from "../components/book-flight/InfoBanner";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import { FlightDetailsInfoCard } from "./FlightDetailsInfoCard";

const SearchResults = () => {
  const date = new Date();
  const currencySymbol = useUserStore((state: any) => state.currencySymbol);
  const flightStore = useFlightStore((state: any) => state);
  const navigate = useNavigate();
  const allFlights =
    flightStore.allFlights.length > 0
      ? flightStore.allFlights.slice(0, 100)
      : [];
  return (
    <div className="h-screen w-screen">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between border border-b-1 pt-6 pb-2 pr-6">
            <ArrowBackButton onClick={() => navigate(-1)} />
            <NavBarTitle
              title={`${flightStore.selectedFromCity} - ${flightStore.selectedToCity}`}
            />
            <FiEdit2 />
          </div>
        }
      />
      <div className="flex flex-col mx-3.5">
        <div className="mt-3 flex flex-wrap">
          <FilterPill
            label={`${dateFormat(date)}`}
            icon={<FiCalendar />}
            selected={true}
          />
          <FilterPill label={`Price`} icon={<FiArrowDown />} />
          <FilterPill label={`Stops`} icon={<FiCornerDownRight />} />
          <FilterPill label={`Price`} icon={<FiCornerDownRight />} />
          <FilterPill label={`Airlines`} icon={<FiTag />} selected={true} />
        </div>
        <div className="mt-6">
          <InfoBanner
            message={`You can spend ${currencySymbol}48,600 on travel this month! `}
          />
        </div>
        <div className="mt-5">
          {allFlights.map((searchedFlight: any) => {
            const arrivalDate = searchedFlight.arrivalDatetime;
            const departureDate = searchedFlight.departureDatetime;
            return (
              <FlightDetailsInfoCard
                key={searchedFlight.flightId}
                depatureLocation={searchedFlight.departureLocationCityCode}
                depatureTime={departureDate.substring(11, 16)}
                arrivalLocation={searchedFlight.arrivalLocationCityCode}
                arrivalTime={arrivalDate.substring(11, 16)}
                flightTime={searchedFlight.totalDuration.toLowerCase()}
                flightNumber={searchedFlight.arrivalAircraftCode}
                amount={searchedFlight.totalPrice}
                currency={searchedFlight.currency}
                onClick={() => {
                  flightStore.setSelectAFlight(searchedFlight);
                  navigate("/confirm-booking");
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SearchResults;
