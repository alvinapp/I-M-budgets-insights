import { convertDate } from "client/utils/Formatters";
import { create } from "zustand";
const currentDate = new Date();
const useFlightStore = create((set) => ({
  fromCities: [],
  toCities: [],
  selectedFromCity: "",
  selectedToCity: "",
  allFlights: [],
  departuredate: convertDate(currentDate.toString()),
  class: "ECONOMY",
  adults: 0,
  children: 0,
  infants: 0,
  selectAFlight: {},
  bookedFlightId: {},
  bookedFlightInfo: {},
  setFlightClass: (flightClass: string) => {
    return set(() => {
      const result = {
        class: flightClass,
      };
      return result;
    });
  },
  setDepartureDate: (date: string) => {
    return set(() => {
      const result = {
        departuredate: date,
      };
      return result;
    });
  },
  setFromCity: (from: any) => {
    return set(() => {
      const result = {
        selectedFromCity: from,
      };
      return result;
    });
  },
  setToCity: (to: any) => {
    return set(() => {
      const result = {
        selectedToCity: to,
      };
      return result;
    });
  },
  setFromCities: (fromCities: Array<any>) => {
    return set(() => {
      const result = {
        fromCities: fromCities,
      };
      return result;
    });
  },
  setToCities: (toCitiesInfo: Array<any>) => {
    return set(() => {
      const result = {
        toCities: toCitiesInfo,
      };
      return result;
    });
  },
  setSelectAFlight: (flightDetails: any) => {
    return set(() => {
      const result = {
        selectAFlight: flightDetails,
      };
      return result;
    });
  },
  setFlights: (flights: any) => {
    return set(() => {
      const result = {
        allFlights: flights,
      };
      return result;
    });
  },
  setBookFlightId: (flightId: any) => {
    return set(() => {
      const result = {
        bookedFlightId: flightId,
      };
      return result;
    });
  },
  setBookedFlightInfo: (flightInfo: any) => {
    return set(() => {
      const result = {
        bookedFlightInfo: flightInfo,
      };
      return result;
    });
  },
  incrementAdults: () => set((state: any) => ({ adults: state.adults + 1 })),
  incrementChildren: () =>
    set((state: any) => ({ children: state.children + 1 })),
  incrementInfants: () => set((state: any) => ({ infants: state.infants + 1 })),
  decrementAdults: () => set((state: any) => ({ adults: state.adults - 1 })),
  decrementChildren: () =>
    set((state: any) => ({ children: state.children - 1 })),
  decrementInfants: () => set((state: any) => ({ infants: state.infants - 1 })),
}));
export default useFlightStore;
