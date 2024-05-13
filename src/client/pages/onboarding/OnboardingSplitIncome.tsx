import { useEffect, useRef, useState } from "react";
import { FiPieChart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useBudgetSettingsStore } from "client/store/budgetSettingsStore";
import MainButton from "../components/MainButton";
import NavBar from "../components/NavBar";
import ArrowBackButton from "../components/ArrowBack";
import ReactSlider from "react-slider";
import { useConfigurationStore, IConfig } from "client/store/configuration";
import { setIncome, completeOnboarding } from "client/api/users";
import { GoalMacroType, setMacro } from "client/api/goals";
import SliderThumbComponent from "../components/SliderThumbComponent";
import debounce from "lodash.debounce";
import useBottomSheetStore from "client/store/bottomSheetStore";
import useUserStore from "client/store/userStore";
import { formatCurrency, reformatBudgetSplit } from "client/utils/Formatters";
import useCategoriesStore from "client/store/categoriesStore";
import DebtInfo from "../components/DebtInfo";

const OnboardingSplitIncome = () => {
  const navigate = useNavigate();
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const bottomSheetStore = useBottomSheetStore((state: any) => state);
  const budgetSettingsStore = useBudgetSettingsStore();
  const categoriesStore = useCategoriesStore((state: any) => state);
  const userStore = useUserStore((state: any) => state);
  const { currency, incomeSplit } = budgetSettingsStore;
  const [monthlyIncome, setMonthlyIncomeValue] = useState(
    budgetSettingsStore.monthlyIncome || userStore.user.income
  );
  const split = reformatBudgetSplit(categoriesStore.macros?.budget_split ?? "");
  const [essentialsRatio, setEssentialsRatio] = useState(
    split ? parseInt(split[0]) : incomeSplit.essentials
  );
  const [wantsRatio, setWantsRatio] = useState(
    split ? parseInt(split[1]) : incomeSplit.wants
  );
  const [savingsRatio, setSavingsRatio] = useState(
    split ? parseInt(split[2]) : incomeSplit.savings
  );
  const [showPercentage, setShowPercentage] = useState(false);
  const [debouncedRatio, setDebouncedRatio] = useState({
    essentialsRatio,
    wantsRatio,
    savingsRatio,
  });
  const setDebouncedRatioDebounced = useRef(
    debounce((newRatio) => setDebouncedRatio(newRatio), 300)
  ).current;

  useEffect(() => {
    setDebouncedRatioDebounced({ essentialsRatio, wantsRatio, savingsRatio });
  }, [essentialsRatio, wantsRatio, savingsRatio, setDebouncedRatioDebounced]);

  useEffect(() => {
    const totalRatio = 100;
    const totalAllocated =
      debouncedRatio.essentialsRatio +
      debouncedRatio.wantsRatio +
      debouncedRatio.savingsRatio;

    if (totalAllocated !== totalRatio) {
      const diff = totalRatio - totalAllocated;

      // Distribute the difference proportionally among the ratios
      const essentialsAdjustment =
        (debouncedRatio.essentialsRatio / totalAllocated) * diff;
      const wantsAdjustment =
        (debouncedRatio.wantsRatio / totalAllocated) * diff;
      const savingsAdjustment =
        (debouncedRatio.savingsRatio / totalAllocated) * diff;

      // Adjust the ratios
      setEssentialsRatio(debouncedRatio.essentialsRatio + essentialsAdjustment);
      setWantsRatio(debouncedRatio.wantsRatio + wantsAdjustment);
      setSavingsRatio(debouncedRatio.savingsRatio + savingsAdjustment);
    }
  }, [debouncedRatio]);

  const generateSliderValues = (length = 100) =>
    new Array(length).fill(1).map((_, i) => i + 1);
  const calculateIncomeAmount = (incomeRatio: number) =>
    Math.floor((incomeRatio / 100) * monthlyIncome);
  const saveOnboardingData = async () => {
    await setIncome({ incomeAmount: monthlyIncome, configuration });
    const macros: [GoalMacroType, number][] = [
      ["Essentials", essentialsRatio],
      ["Wants", wantsRatio],
      ["Savings", savingsRatio],
    ];

    for (let i = 0; i < macros.length; i++) {
      const [macroType, macroRatio] = macros[i];
      await setMacro({
        goalMacro: {
          name: `${macroType} Total`,
          type_name: macroType,
          amount: calculateIncomeAmount(macroRatio),
          percentage: 0,
          share: macroRatio,
          reset_micros: false,
        },
        configuration,
      });
    }

    await completeOnboarding({ completionTime: new Date(), configuration });
  };

  const postAllMacros = async () => {
    try {
      await setIncome({ incomeAmount: monthlyIncome, configuration });

      const macros: [GoalMacroType, number][] = [
        ["Essentials", essentialsRatio],
        ["Wants", wantsRatio],
        ["Savings", savingsRatio],
      ];

      for (let i = 0; i < macros.length; i++) {
        const [macroType, macroRatio] = macros[i];
        await setMacro({
          goalMacro: {
            name: `${macroType}`,
            type_name: macroType,
            amount: calculateIncomeAmount(macroRatio),
            percentage: 0,
            share: macroRatio,
            reset_micros: false,
          },
          configuration,
        });
      }

      await completeOnboarding({ completionTime: new Date(), configuration });

      // Redirect to success page
      // bottomSheetStore.setSuccessBottomSheet(true);
      // document
      //   .getElementById("budget-container")
      //   ?.classList.add("disable-interaction");

      if (userStore.user.is_onboarded) {
        navigate("/budget-settings");
      } else {
        navigate("/onboard-success");
      }
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const handleSliderChange = (newValue: number, type: string) => {
    const totalRatio = 100;
    const fixedSavingsRatio = 45; // Fixed savings ratio

    if (type === "savings") {
      console.error("Savings ratio is fixed and cannot be changed.");
      return; // Prevent any changes to savings
    }

    const oldValue = type === "essentials" ? essentialsRatio : wantsRatio;

    const change = newValue - oldValue;

    if (newValue === totalRatio - fixedSavingsRatio) {
      if (type === "essentials") {
        setWantsRatio(0);
      } else if (type === "wants") {
        setEssentialsRatio(0);
      }
      setSavingsRatio(fixedSavingsRatio);
      return;
    }

    if (oldValue === totalRatio - fixedSavingsRatio) {
      const adjustedRatio = totalRatio - fixedSavingsRatio - newValue;
      if (type === "essentials") {
        setWantsRatio(adjustedRatio);
      } else if (type === "wants") {
        setEssentialsRatio(adjustedRatio);
      }
      setSavingsRatio(fixedSavingsRatio);
      return;
    }

    const allocateChange = (change: number) => {
      // Proportionally allocate change to the non-affected ratio
      if (type === "essentials") {
        setWantsRatio(Math.max(wantsRatio - change, 0));
      } else if (type === "wants") {
        setEssentialsRatio(Math.max(essentialsRatio - change, 0));
      }
    };

    // Apply the new value and allocate change to the other ratio
    if (type === "essentials") {
      setEssentialsRatio(Math.max(newValue, 0));
      allocateChange(change);
    } else if (type === "wants") {
      setWantsRatio(Math.max(newValue, 0));
      allocateChange(change);
    }

    // Ensure savings ratio is always fixed at 45
    setSavingsRatio(fixedSavingsRatio);
  };

  // const handleSliderChange = (newValue: number, type: string) => {
  //   const totalRatio = 100;
  //   const fixedSavingsRatio = 45;

  //   const oldValue =
  //     type === "essentials"
  //       ? essentialsRatio
  //       : type === "wants"
  //         ? wantsRatio
  //         : fixedSavingsRatio;

  //   if (type === "savings") {
  //     console.error("Savings ratio is fixed and cannot be changed.");
  //     return; // Prevent any changes to savings
  //   }

  //   const change = newValue - oldValue;

  //   if (newValue === totalRatio) {
  //     switch (type) {
  //       case "essentials":
  //         setWantsRatio(0);
  //         break;
  //       case "wants":
  //         setEssentialsRatio(0);
  //         break;
  //     }
  //     setSavingsRatio(fixedSavingsRatio);
  //     return;
  //   }

  //   if (oldValue === totalRatio) {
  //     const remainingRatio = totalRatio - fixedSavingsRatio;
  //     const primaryRatio = remainingRatio * 0.7;
  //     const secondaryRatio = remainingRatio * 0.3;
  //     switch (type) {
  //       case "essentials":
  //         setWantsRatio(primaryRatio);
  //         break;
  //       case "wants":
  //         setEssentialsRatio(primaryRatio);
  //         break;
  //     }
  //     setSavingsRatio(fixedSavingsRatio);
  //     return;
  //   }

  //   const allocateChange = (
  //     primaryType: string,
  //     secondaryType: string,
  //     change: number
  //   ) => {
  //     const remainingRatio = totalRatio - fixedSavingsRatio;
  //     const primaryChange = (remainingRatio * change / (oldValue + change)) * 0.7;
  //     const secondaryChange = change - primaryChange;

  //     switch (primaryType) {
  //       case "essentials":
  //         setEssentialsRatio(Math.max(essentialsRatio + primaryChange, 0));
  //         break;
  //       case "wants":
  //         setWantsRatio(Math.max(wantsRatio + primaryChange, 0));
  //         break;
  //     }

  //     switch (secondaryType) {
  //       case "essentials":
  //         setEssentialsRatio(Math.max(essentialsRatio + secondaryChange, 0));
  //         break;
  //       case "wants":
  //         setWantsRatio(Math.max(wantsRatio + secondaryChange, 0));
  //         break;
  //     }
  //   };

  //   switch (type) {
  //     case "essentials":
  //       if (change > 0) {
  //         allocateChange("wants", "savings", -change);
  //       } else {
  //         allocateChange("savings", "wants", -change);
  //       }
  //       setEssentialsRatio(newValue);
  //       break;
  //     case "wants":
  //       if (change > 0) {
  //         allocateChange("essentials", "savings", -change);
  //       } else {
  //         allocateChange("savings", "essentials", -change);
  //       }
  //       setWantsRatio(newValue);
  //       break;
  //   }
  //   setSavingsRatio(fixedSavingsRatio); // Ensure savings ratio is always fixed
  // };

  return (
    <div className="flex flex-col">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between pt-6 pb-2 pr-6">
            <ArrowBackButton onClick={() => navigate(-1)} />
          </div>
        }
      />
      <div className="flex-grow h-px bg-skin-accent3"></div>

      <div className="flex flex-col mt-3 items-left">
        <div className="rounded-full h-11 w-11 bg-skin-iconPrimary flex justify-center items-center mx-3.5">
          <FiPieChart color="#555466" />
        </div>
        <div className="font-custom font-bold text-2xl text-skin-base mt-1.5 mx-3.5">
          Whoop! Here is your recommended budget split.
        </div>
        <div className="bg-addIncomeBg bg-cover bg-no-repeat h-36 bg-right">
          <div className="text-xs font-primary text-skin-base tracking-wide mt-6 font-medium mx-3.5">
            We recommend keeping 50% of your take-home income for Essential
            expenses, then 30% for Wants, then about 20% toward Savings or Debt
            repayments.
            <br></br>
          </div>
        </div>
        <div className="flex flex-col mt-12 mx-6">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="justify-self-start font-bold text-2xl text-skin-base">
              Debt repayment
            </div>
            <div className="justify-self-end">
              <div className="font-custom font-bold text-2xl text-skin-base">
                {calculateIncomeAmount(savingsRatio)?.toLocaleString("en-us")}
                <sup className="align-super -ml-1 text-xxxs">
                  {currency ?? ""}
                </sup>
              </div>
            </div>
            <div className="col-span-2">
              <ReactSlider
                value={savingsRatio}
                className="horizontal-slider"
                marks={generateSliderValues()}
                markClassName="example-mark"
                min={0}
                max={100}
                thumbClassName="example-thumb"
                trackClassName="example-track"
                renderThumb={(props, state) => (
                  <SliderThumbComponent
                    valueNow={state.valueNow}
                    props={props}
                    showPercentage={showPercentage}
                    backgroundColor="#CB960F"
                    isLocked={true}
                  />
                )}
                onBeforeChange={() => setShowPercentage(true)}
                onAfterChange={() => setShowPercentage(false)}
                onChange={(value) => handleSliderChange(value, "savings")}
                disabled={true}
              />
            </div>
            <div
              className="justify-self-start text-xs text-skin-subtitle font-semibold"
              style={{ marginTop: "-12%" }}
            >
              0
            </div>
            <div
              className="justify-self-end text-xs text-skin-subtitle font-semibold"
              style={{ marginTop: "-12%" }}
            >
              {formatCurrency(monthlyIncome)}
            </div>
          </div>
          <div className="mt-4">
            <DebtInfo
              loanValue={calculateIncomeAmount(savingsRatio)}
              currency={currency}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full mt-6">
            <div className="justify-self-start font-bold text-2xl text-skin-base">
              Essentials
            </div>
            <div className="justify-self-end font-bold">
              <div className="font-custom text-2xl text-skin-base">
                {calculateIncomeAmount(essentialsRatio)?.toLocaleString(
                  "en-us"
                )}
                <sup className="align-super -ml-1 text-xxxs">
                  {currency ?? ""}
                </sup>
              </div>
            </div>
            <div className="col-span-2">
              <ReactSlider
                value={essentialsRatio}
                className="horizontal-slider"
                marks={generateSliderValues()}
                markClassName="example-mark"
                min={0}
                max={100}
                thumbClassName="example-thumb"
                trackClassName="essential-track"
                renderThumb={(props, state) => (
                  <SliderThumbComponent
                    valueNow={state.valueNow}
                    props={props}
                    showPercentage={showPercentage}
                    backgroundColor="#00AB9E"
                  />
                )}
                onBeforeChange={() => setShowPercentage(true)}
                onAfterChange={() => setShowPercentage(false)}
                onChange={(value) => handleSliderChange(value, "essentials")}
              />
            </div>
            <div
              className="justify-self-start text-xs text-skin-subtitle font-semibold"
              style={{ marginTop: "-12%" }}
            >
              0
            </div>
            <div
              className="justify-self-end text-xs text-skin-subtitle font-semibold"
              style={{ marginTop: "-12%" }}
            >
              {formatCurrency(monthlyIncome)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full mt-6 mb-32">
            <div className="justify-self-start font-bold text-2xl text-skin-base">
              Wants
            </div>
            <div className="justify-self-end font-bold">
              <div className="font-custom text-2xl text-skin-base">
                {calculateIncomeAmount(wantsRatio)?.toLocaleString("en-us")}
                <sup className="align-super -ml-1 text-xxxs">
                  {currency ?? ""}
                </sup>
              </div>
            </div>
            <div className="col-span-2">
              <ReactSlider
                value={wantsRatio}
                className="horizontal-slider"
                marks={generateSliderValues()}
                markClassName="example-mark"
                min={0}
                max={100}
                thumbClassName="example-thumb"
                trackClassName="wants-track"
                renderThumb={(props, state) => (
                  <SliderThumbComponent
                    valueNow={state.valueNow}
                    props={props}
                    showPercentage={showPercentage}
                    backgroundColor="#345DAF"
                  />
                )}
                onBeforeChange={() => setShowPercentage(true)}
                onAfterChange={() => setShowPercentage(false)}
                onChange={(value) => handleSliderChange(value, "wants")}
              />
            </div>
            <div
              className="justify-self-start text-xs text-skin-subtitle font-semibold"
              style={{ marginTop: "-12%" }}
            >
              0
            </div>
            <div
              className="justify-self-end text-xs text-skin-subtitle font-semibold"
              style={{ marginTop: "-12%" }}
            >
              {formatCurrency(monthlyIncome)}
            </div>
          </div>
        </div>
        <div className="fixed bottom-5 left-0 right-0 mx-3.5 text-sm z-10">
          <MainButton
            title="Continue"
            isDisabled={false}
            click={() => {
              budgetSettingsStore.setIncomeSplit({
                essentials: essentialsRatio,
                wants: wantsRatio,
                savings: savingsRatio,
              });
              postAllMacros();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OnboardingSplitIncome;
