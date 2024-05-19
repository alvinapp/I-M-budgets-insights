import { lazy, Suspense } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import "./style.scss";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import { BudgetSettings } from "./pages/budgets/BudgetSettings";
import ViewInfo from "./pages/budgets/ViewInfo";
import { EmptyBudgetSettings } from "./pages/budgets/edit-settings/EmptyBudgetSettings";
import CustomLoader from "./pages/components/Loader/CustomLoader";
import ViewLinkedAccounts from "./pages/budgets/ViewLinkedAccounts";

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

const OnboardingSelectAccount = lazy(
  () => import("./pages/onboarding/OnboardingSelectAccount")
);

const BudgetsView = lazy(() => import("./pages/budgets/BudgetsView"));

const InsightsView = lazy(() => import("./pages/insights/InsightsView"));
const EditBudgetSettings = lazy(
  () => import("./pages/budgets/edit-settings/EditBudgetSettings")
);
const EditMonthlyIncome = lazy(
  () => import("./pages/budgets/edit-settings/EditMonthlyIncome")
);
const EditSplitIncome = lazy(
  () => import("./pages/budgets/edit-settings/EditSplitIncome")
);
const CashFlow = lazy(() => import("./pages/insights/cashflow/Cashflow"));
const App = () => {
  const queryClient = new QueryClient();

  return (
    <SkeletonTheme baseColor="#E8E8E8" highlightColor="#C0C0C0">
      <QueryClientProvider client={queryClient}>
        <div className="overflow-x-hidden w-screen">
          <Suspense
            fallback={
              <div className="h-screen w-screen flex justify-center items-center">
                <CustomLoader />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<OnboardingStart />} />
              <Route
                path="/onboard-select-account"
                element={<OnboardingSelectAccount />}
              />
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
              <Route path="/insights-view" element={<InsightsView />} />
              <Route path="/edit-budgets" element={<EditBudgetSettings />} />
              <Route
                path="/edit-monthly-income"
                element={<EditMonthlyIncome />}
              />
              <Route path="/edit-split-income" element={<EditSplitIncome />} />
              <Route path="/view-info" element={<ViewInfo />} />
              <Route path="/edit-split-income" element={<EditSplitIncome />} />
              <Route path="/empty-budgets" element={<EmptyBudgetSettings />} />
              <Route path="/cashflow" element={<CashFlow />} />
              <Route path="/linked-accounts" element={<ViewLinkedAccounts />} />
            </Routes>
          </Suspense>
          <ToastContainer />
        </div>
      </QueryClientProvider>
    </SkeletonTheme>
  );
};

export default App;
