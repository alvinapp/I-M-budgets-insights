import { lazy, Suspense } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import "./style.scss";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import { BudgetSettings } from "./pages/budgets/BudgetSettings";

declare var AppConfig: AppConfig;

const OnboardingStart = lazy(
  () => import("./pages/onboarding/OnboardingStart")
);
const OnboardingAddIncome = lazy(
  () => import("./pages/onboarding/OnboardingAddIncome")
);
const OnboardingSplitIncome = lazy(
  () => import("./pages/onboarding/OnboardingSplitIncome")
);
const OnboardingSuccess = lazy(
  () => import("./pages/onboarding/OnboardingSuccess")
);
const BudgetsView = lazy(() => import("./pages/budgets/BudgetsView"));

const InsightsView = lazy(() => import("./pages/insights/InsightsView"));

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
              <Route path="/" element={<InsightsView />} />
              <Route path="/onboard-start" element={<OnboardingStart />} />
              <Route
                path="/onboard-add-income"
                element={<OnboardingAddIncome />}
              />
              <Route
                path="/onboard-split-income"
                element={<OnboardingSplitIncome />}
              />
              <Route path="/onboard-success" element={<OnboardingSuccess />} />
              <Route path="/budget-settings" element={<BudgetSettings />} />
              <Route path="/budgets-view" element={<BudgetsView />} />
              <Route path="/budgets-view" element={<InsightsView />} />
            </Routes>
          </Suspense>
          <ToastContainer />
        </div>
      </QueryClientProvider>
    </SkeletonTheme>
  );
};

export default App;
