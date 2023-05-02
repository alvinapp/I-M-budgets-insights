import React, { useState } from "react";
import overlay from "client/assets/images/flight/overlay.svg";
import flight from "client/assets/images/flight/flight.png";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import CloseButton from "../components/CloseButton";
import MainButton from "../components/MainButton";
import TabFilter from "../components/TabFilter";
import {
  baggageOptions,
  bookAFlightTabs,
  flightClassChoices,
  membersWhoTravel,
} from "client/utils/MockData";
import SearchLocation from "../components/book-flight/SearchLocation";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCalendar,
  FiCheck,
} from "react-icons/fi";
import { CalendarDropDown } from "../components/CalendarDropDown";
import ClassCard from "../components/book-flight/ClassCard";
import { Member } from "../components/book-flight/Member";
import { Baggage } from "../components/book-flight/Baggage";
import { useQuery } from "react-query";
import authenticateUser from "client/api/token";
import getToken from "client/api/token";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useUserStore from "client/store/userStore";
import { showCustomToast } from "client/utils/Toast";
import { searchCities, searchFlights } from "client/api/flights";
import useFlightStore from "client/store/flightStore";
import { capitalize } from "client/utils/Formatters";
import { SearchDropDown } from "../components/SearchDropDown";
import { Toast } from "react-toastify/dist/components";

const SearchAFlight = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const [classIndex, setClassIndex] = useState(0);
  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const setToken = useConfigurationStore((state: any) => state.setToken);
  const setUser = useUserStore((state: any) => state.setUser);
  const [timer, setTimer] = useState();
  const [keyword, setKeyword] = useState("");
  const flightStore = useFlightStore((state: any) => state);
  const fromCities = flightStore.fromCities;
  const toCities = flightStore.toCities;
  const [fromCityName, setFromCityName] = useState("");
  const [toCityName, setToCityName] = useState("");
  const {
    data: images,
    isLoading,
    error,
    refetch: searchACity,
  } = useQuery(
    "search-cities",
    () =>
      searchCities({ keyword: keyword.trim(), configuration: configurations }),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
  const {
    data: searched_flights,
    isFetching: flightSearchIsFetching,
    refetch: searchAllFlights,
  } = useQuery(
    "search-flights",
    () =>
      searchFlights({
        configuration: configurations,
        data: {
          flightid: "",
          originlocation: flightStore.selectedFromCity,
          destinationlocation: flightStore.selectedToCity,
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
  const fromCitiesChanged = (e: any) => {
    setKeyword(e);
    setFromCityName(e);
    clearTimeout(timer);
    const newTimer: any = setTimeout(() => {
      searchACity().then((res) => {
        flightStore.setFromCities(res.data);
      });
    }, 700);

    setTimer(newTimer);
    return e;
  };
  const toCitiesChanged = (e: any) => {
    setKeyword(e);
    setToCityName(e);
    clearTimeout(timer);
    const newTimer: any = setTimeout(() => {
      searchACity().then((res) => {
        flightStore.setToCities(res.data);
      });
    }, 700);

    setTimer(newTimer);
    return e;
  };
  const authenticateUser = async () => {
    getToken(configurations).then((res) => {
      if (typeof res.user !== "undefined") {
        setUser(res.user);
        setToken(res.token);
      } else {
        navigate("/");
        showCustomToast({ message: "The sdk key is invalid" });
      }
    });
  };

  const { data } = useQuery(["token"], () => authenticateUser, {
    refetchOnWindowFocus: false,
  });
  return (
    <div className="h-screen w-screen relative no-scrollbar">
      <div className="h-1/4 absolute top-0 left-0 right-0">
        <div className="relative">
          <img src={flight} className="absolute top-0 right-0 left-0" />
          <img src={overlay} className="absolute object-cover w-screen h-72" />
          <div className="absolute top-16 left-0 right-0 flex flex-col items-center">
            <div className="font-workSans font-semibold text-xl text-white tracking-subtitle">
              Budget
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 absolute top-0 right-0 left-0 px-3.5">
        <NavBar
          children={
            <div className="flex flex-row justify-between items-center">
              <CloseButton
                background="bg-skin-base"
                onClick={() => {
                  navigate(-3);
                }}
              />
            </div>
          }
        />
      </div>
      <div className="w-screen rounded-t-3xl bg-skin-base absolute right-0 left-0 top-32 bottom-0 pt-5">
        <div className="">
          <TabFilter
            tabs={bookAFlightTabs}
            activeTab={tabIndex}
            onClick={(tab: any) => setTabIndex(tab.tab_id)}
          />
          <div className="mt-4 mx-3.5">
            {tabIndex == 1 ? (
              <div></div>
            ) : (
              <div className="flex flex-col">
                <div className="text-tiny font-poppins font-medium text-skin-base mt-7 mb-3">
                  From/to
                </div>
                <div className="">
                  <div
                    className={`shadow-card rounded-lg p-5 ${
                      toCities.length > 0
                        ? "border border-skin-primary"
                        : fromCities.length > 0
                        ? "border border-skin-primary"
                        : ""
                    }`}
                  >
                    {flightStore.toCities.length > 0 ? (
                      <div></div>
                    ) : (
                      <div className="mb-6">
                        <SearchLocation
                          icon={<FiArrowUpRight size="1.2rem" />}
                          placeHolder="Lagos, Nigeria (LOS)"
                          change={fromCitiesChanged}
                          value={fromCityName ? fromCityName : ""}
                        />
                      </div>
                    )}
                    {flightStore.fromCities.length > 0 ? (
                      <div></div>
                    ) : (
                      <div className="mb-6">
                        <SearchLocation
                          icon={<FiArrowDownRight size="1.2rem" />}
                          placeHolder="Port Harcourt, Nigeria (PHC)"
                          change={toCitiesChanged}
                          value={toCityName ? toCityName : ""}
                        />
                      </div>
                    )}
                    <div className="mt-5">
                      {flightStore.fromCities.length > 0 ||
                      flightStore.toCities.length > 0 ? (
                        <SearchDropDown
                          data={fromCities}
                          onClick={(city: any) => {
                            flightStore.setFromCities([]);
                            flightStore.setFromCity(city.address.cityCode);
                            setFromCityName(
                              capitalize(city.address.cityName.toLowerCase())
                            );
                          }}
                        />
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div className="mt-5">
                      <SearchDropDown
                        data={toCities}
                        onClick={(city: any) => {
                          flightStore.setToCities([]);
                          flightStore.setToCity(city.address.cityCode);
                          setToCityName(
                            capitalize(city.address.cityName.toLowerCase())
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-tiny font-poppins font-medium text-skin-base mt-6 mb-3">
                  Travel date
                </div>
                <CalendarDropDown icon={<FiCalendar />} />
                <div className="text-tiny font-poppins font-medium text-skin-base mt-6 mb-3">
                  Class
                </div>
                <div className="flex flex-wrap">
                  {flightClassChoices.map((flightClassChoice) => {
                    const selectedIndex =
                      flightClassChoice.class_id == classIndex;
                    return (
                      <ClassCard
                        key={flightClassChoice.class_id}
                        label={flightClassChoice.name}
                        selected={selectedIndex}
                        onClick={() => {
                          setClassIndex(flightClassChoice.class_id);
                          flightStore.setFlightClass(
                            flightClassChoice.name.toUpperCase()
                          );
                        }}
                      />
                    );
                  })}
                </div>
                <div className="text-tiny font-poppins font-medium text-skin-base mt-6 mb-3">
                  Traveler(s)
                </div>
                <div className="flex flex-wrap">
                  <Member
                    memberName="Adults"
                    age="Above 18yrs"
                    numberOfPeople={flightStore.adults}
                    increment={() => {
                      flightStore.incrementAdults();
                    }}
                    decrement={() => {
                      flightStore.decrementAdults();
                    }}
                  />
                  <Member
                    memberName="Children"
                    age="lorem ipsum"
                    numberOfPeople={flightStore.children}
                    increment={() => {
                      flightStore.incrementChildren();
                    }}
                    decrement={() => {
                      flightStore.decrementChildren();
                    }}
                  />
                  <Member
                    memberName="Infants"
                    age="Under 2yrs"
                    numberOfPeople={flightStore.infants}
                    increment={() => {
                      flightStore.incrementInfants();
                    }}
                    decrement={() => {
                      flightStore.decrementInfants();
                    }}
                  />
                </div>
                <div className="flex flex-col mt-8 mb-18">
                  {baggageOptions.map((baggageOption: any) => {
                    return (
                      <Baggage
                        label={baggageOption.label}
                        caption={baggageOption.caption}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 mx-3.5">
        <MainButton
          title="Search flights"
          click={() => {
            searchAllFlights().then((res) => {
              if (res.data && Object.keys(res.data.data).length > 0) {
                flightStore.setFlights(res.data.data);
                navigate("/search-results");
              } else {
                showCustomToast({
                  message: `${res.data.responseMessage}`,
                });
              }
            });
          }}
          loading={flightSearchIsFetching}
        />
      </div>
    </div>
  );
};
export default SearchAFlight;
