import { confirmBooking } from "client/api/flights";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useFlightStore from "client/store/flightStore";
import useUserStore from "client/store/userStore";
import { paymentCards } from "client/utils/MockData";
import { FiMail, FiMap, FiPhone, FiUser, FiUserCheck } from "react-icons/fi";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import ArrowBackButton from "../components/ArrowBack";
import { CashBackBanner } from "../components/book-flight/CashBackBanner";
import { FlightDetailsCard } from "../components/book-flight/FlightDetailsCard";
import FlightNumber from "../components/book-flight/FlightNumber";
import { InfoPill } from "../components/book-flight/InfoPill";
import { PaymentView } from "../components/book-flight/PaymentView";
import ProfileCard from "../components/book-flight/ProfileCard";
import MainButton from "../components/MainButton";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import flightPath from "client/assets/images/flight/flightpath.png";
import { showCustomToast } from "client/utils/Toast";
const ConfirmBooking = () => {
  const flightStore = useFlightStore((state: any) => state);
  const userStore = useUserStore((state: any) => state);
  const navigate = useNavigate();
  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const {
    data: confirm_booked_flight,
    isFetching: confirmFlightIsFetching,
    refetch: confirmABooking,
  } = useQuery(
    "",
    () =>
      confirmBooking({
        configuration: configurations,
        data: {
          flightid: flightStore.selectAFlight.flightId,
          originlocation: flightStore.selectAFlight.departureLocationCityCode,
          destinationlocation:
            flightStore.selectAFlight.arrivalLocationCityCode,
          departuredate: flightStore.departuredate,
          roundtrip: false,
          returndate: null,
          adults: flightStore.adults,
          children: flightStore.children,
          infants: flightStore.infants,
          class: flightStore.class,
        },
      }),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
  return (
    <div className="h-screen w-screen relative">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between border border-b-1 pt-6 pb-2">
            <ArrowBackButton onClick={() => navigate(-1)} />
            <NavBarTitle title="Confirm Booking" />
            <div className="h-6 w-6 rounded-full"></div>
          </div>
        }
      />
      <div className="flex flex-col px-3.5">
        <div className="text-tiny font-poppins font-medium text-skin-base mt-6 mb-3">
          Traveller details
        </div>
        <div className="shadow-card rounded-lg px-3.5 pt-3 pb-6">
          <div className="flex flex-row">
            <InfoPill label="Mr." selected={true} />
            <InfoPill label="Mrs." />
            <InfoPill label="Miss." />
          </div>
          <div className="mt-8">
            <ProfileCard
              icon={<FiUser color="#6F89A5" size="1.5rem" />}
              title={`${userStore.user.first_name} ${userStore.user.last_name}`}
            />
            <div className="border mt-4 mb-4"></div>
            <ProfileCard
              icon={<FiMail color="#6F89A5" size="1.5rem" />}
              title={`${userStore.user.email}`}
            />
            <div className="border mt-4 mb-4"></div>
            <ProfileCard
              icon={<FiPhone color="#6F89A5" size="1.5rem" />}
              title="(815) 852-2866"
            />
            <div className="border mt-4 mb-4"></div>
            <ProfileCard
              icon={<FiUserCheck color="#6F89A5" size="1.5rem" />}
              title="B39402"
            />
            <div className="border mt-4 mb-4"></div>
            <ProfileCard
              icon={<FiMap size="1.5rem" />}
              title={`${userStore.user.country}`}
            />
          </div>
        </div>
        <div className="text-tiny font-poppins font-medium text-skin-base mt-6 mb-3">
          My flight
        </div>
        <div className="shadow-card rounded-lg px-3.5 pt-3 pb-6">
          <div className="flex flex- justify-center mt-6 mb-5">
            <FlightNumber
              title={flightStore.selectAFlight.arrivalAircraftCode}
            />
          </div>

          <FlightDetailsCard
            acronym={flightStore.selectAFlight.departureLocationCityCode}
            location=""
            terminal=""
            departure_arrival="Departure"
            time={flightStore.selectAFlight.departureDatetime.substring(11, 16)}
            flight_time=""
          />
          <div className="mb-1">
            <img src={flightPath} />
          </div>
          <div className="font-medium font-poppins text-tiny text-skin-subtitle tracking-listtile_subtitle flex justify-center mt-4 mb-2">
            {flightStore.selectAFlight.totalDuration.toLowerCase()}
          </div>
          <FlightDetailsCard
            acronym={flightStore.selectAFlight.arrivalLocationCityCode}
            location=""
            terminal=""
            departure_arrival="Arrival"
            time={flightStore.selectAFlight.arrivalDatetime.substring(11, 16)}
            flight_time=""
          />
        </div>
        <div className="mt-4 mb-6">
          <CashBackBanner label="Book now, earn up to 3% back in travel points." />
        </div>
        <div className="text-tiny font-poppins font-medium text-skin-base  mb-3">
          Payment
        </div>
        <div className="shadow-card rounded-lg px-3.5 pt-3 pb-6 mb-44">
          <PaymentView
            cards={paymentCards}
            amount={`${flightStore.selectAFlight.currency} ${flightStore.selectAFlight.totalPrice}`}
            // percentageDiscount="40% discount  applied*"
            // discount={`${currency}${60000}`}
          />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 mx-3.5">
        <MainButton
          title="Confirm booking"
          click={() => {
            confirmABooking().then((result) => {
              if (result.data && Object.keys(result.data.data).length > 0) {
                flightStore.setBookFlightId(result.data.data);
                navigate("/booking-success");
              } else {
                showCustomToast({
                  message: `${result.data.responseMessage}`,
                });
              }
            });
          }}
          loading={confirmFlightIsFetching}
        />
      </div>
    </div>
  );
};
export default ConfirmBooking;
