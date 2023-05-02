import { lazy, Suspense } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import "./style.scss";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";

declare var AppConfig: AppConfig;

const SearchAFlight = lazy(() => import("./pages/book-a-flight/SearchACity"));
const ConfirmBooking = lazy(
  () => import("./pages/book-a-flight/ConfirmBooking")
);
const SearchResults = lazy(() => import("./pages/book-a-flight/SearchResults"));
const ViewBookedFlightDetails = lazy(
  () => import("./pages/book-a-flight/ViewBookedFlightDetails")
);
const BookingSuccess = lazy(
  () => import("./pages/book-a-flight/BookingSuccess")
);
const OnboardingStart = lazy(
  () => import("./pages/onboarding/OnboardingStart")
);
const App = () => {
  const queryClient = new QueryClient();

  return (
    <SkeletonTheme baseColor="#E8E8E8" highlightColor="#C0C0C0">
      <QueryClientProvider client={queryClient}>
        <div className="overflow-x-hidden w-screen">
          <Suspense
            fallback={
              <div className="flex flex-col w-screen h-screen justify-center items-center">
                <TailSpin
                  height="40"
                  width="40"
                  color="#056489"
                  ariaLabel="tail-spin-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<OnboardingStart />} />
              {/* <Route path="/" element={<SearchAFlight />} /> */}
              <Route path="/confirm-booking" element={<ConfirmBooking />} />
              <Route path="/search-results" element={<SearchResults />} />
              <Route path="/booking-success" element={<BookingSuccess />} />
              <Route
                path="/view-flight-details"
                element={<ViewBookedFlightDetails />}
              />
              <Route path="/onboard-start" element={<OnboardingStart />} />
            </Routes>
          </Suspense>
          <ToastContainer />
        </div>
      </QueryClientProvider>
    </SkeletonTheme>
  );
};

export default App;
