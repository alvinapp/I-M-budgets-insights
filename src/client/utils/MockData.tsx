import {
  FiFlag,
  FiCalendar,
  FiLayers,
  FiTarget,
  FiPauseCircle,
  FiArrowUp,
  FiArrowDown,
} from "react-icons/fi";
const date = new Date();
const yesterday = new Date(date.getTime());
yesterday.setDate(date.getDate() - 1);
export const bookAFlightTabs = [
  {
    tab_id: 0,
    name: "One way",
    icon: <FiArrowUp />,
  },
  {
    tab_id: 1,
    name: "Round trip",
    icon: <FiArrowDown />,
  },
];
export const membersWhoTravel = [
  {
    id: 0,
    memberName: "Adult",
    age: "Above 18yrs",
  },
  {
    id: 1,
    memberName: "Children",
    age: "lorem ipsum",
  },
  {
    id: 2,
    memberName: "Infants",
    age: "Under 2yrs",
  },
];
export const baggageOptions = [
  {
    id: 0,
    label: "Carry on baggage (in-cabin)",
    caption: "5kgs Max per traveller",
  },
  {
    id: 1,
    label: "Checked baggage (off-cabin)",
    caption: "10kgs Max per traveller",
  },
];
export const flightClassChoices = [
  {
    class_id: 0,
    name: "Economy",
  },
  {
    class_id: 1,
    name: "Premium economy",
  },
  {
    class_id: 2,
    name: "Business",
  },
  {
    class_id: 3,
    name: "First class",
  },
];
export const paymentCards = [
  {
    id: 0,
    icon: "",
    label: "Master **** 4302",
  },
  {
    id: 1,
    icon: "",
    label: "Visa **** 5493",
  },
];
export const searchedFlights = [
  {
    id: 0,
    icon: "",
    departureTime: "13:45",
    arrivalTime: "14:50",
    depatureLocation: "LOS",
    arrivalLocation: "PHC",
    flightTime: "1hr 5m",
    flightNumber: "NG 720",
    discount: "60000",
    amount: "40000",
  },
];
