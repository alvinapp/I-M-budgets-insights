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
import userStore from "client/store/userStore";
import useUserStore from "client/store/userStore";
import { reformatBudgetSplit } from "client/utils/Formatters";
import useCategoriesStore from "client/store/categoriesStore";

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
    budgetSettingsStore.monthlyIncome
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
      bottomSheetStore.setSuccessBottomSheet(true);
      document
        .getElementById("budget-container")
        ?.classList.add("disable-interaction");
      navigate("/budget-settings");
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const handleSliderChange = (newValue: number, type: string) => {
    const totalRatio = 100;
    const oldValue =
      type === "essentials"
        ? essentialsRatio
        : type === "wants"
          ? wantsRatio
          : savingsRatio;
    const change = newValue - oldValue;

    if (newValue === totalRatio) {
      switch (type) {
        case "essentials":
          setWantsRatio(0);
          setSavingsRatio(0);
          break;
        case "wants":
          setEssentialsRatio(0);
          setSavingsRatio(0);
          break;
        case "savings":
          setEssentialsRatio(0);
          setWantsRatio(0);
          break;
        default:
          break;
      }
      return;
    }

    if (oldValue === totalRatio) {
      const primaryRatio = (totalRatio - newValue) * 0.7;
      const secondaryRatio = (totalRatio - newValue) * 0.3;
      switch (type) {
        case "essentials":
          setWantsRatio(primaryRatio);
          setSavingsRatio(secondaryRatio);
          break;
        case "wants":
          setEssentialsRatio(primaryRatio);
          setSavingsRatio(secondaryRatio);
          break;
        case "savings":
          setEssentialsRatio(primaryRatio);
          setWantsRatio(secondaryRatio);
          break;
        default:
          break;
      }
      return;
    }

    const allocateChange = (
      primaryType: string,
      secondaryType: string,
      change: number
    ) => {
      const primaryChange = (change * 7) / 10;
      const secondaryChange = change - primaryChange;

      switch (primaryType) {
        case "essentials":
          setEssentialsRatio(Math.max(essentialsRatio + primaryChange, 0));
          break;
        case "wants":
          setWantsRatio(Math.max(wantsRatio + primaryChange, 0));
          break;
        case "savings":
          setSavingsRatio(Math.max(savingsRatio + primaryChange, 0));
          break;
        default:
          break;
      }

      switch (secondaryType) {
        case "essentials":
          setEssentialsRatio(Math.max(essentialsRatio + secondaryChange, 0));
          break;
        case "wants":
          setWantsRatio(Math.max(wantsRatio + secondaryChange, 0));
          break;
        case "savings":
          setSavingsRatio(Math.max(savingsRatio + secondaryChange, 0));
          break;
        default:
          break;
      }
    };

    switch (type) {
      case "essentials":
        if (change > 0) {
          allocateChange("wants", "savings", -change);
        } else {
          allocateChange("savings", "wants", -change);
        }
        setEssentialsRatio(newValue);
        break;
      case "wants":
        if (change > 0) {
          allocateChange("essentials", "savings", -change);
        } else {
          allocateChange("savings", "essentials", -change);
        }
        setWantsRatio(newValue);
        break;
      case "savings":
        if (change > 0) {
          allocateChange("essentials", "wants", -change);
        } else {
          allocateChange("wants", "essentials", -change);
        }
        setSavingsRatio(newValue);
        break;
      default:
        break;
    }
  };

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
        <div className="font-custom font-medium text-2xl text-skin-base mt-1.5 mx-3.5">
          Whoop! Here is your recommended budget split.
        </div>
        <div className="bg-addIncomeBg bg-cover bg-no-repeat h-36 bg-right">
          <div className="text-sm font-primary text-skin-base tracking-wide mt-6 font-regular mx-3.5">
            The best practice for budgeting is 50% of your income for
            Essentials, 30% for Wants, then 20% for Savings. However, you can
            personalize your budget split below.
            <br></br>
          </div>
        </div>
        <div className="flex flex-col mt-12 mx-6">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="justify-self-start font-medium text-2xl text-skin-base">
              Essentials
            </div>
            <div className="justify-self-end font-medium text-2xl text-skin-base">
              <div className="relative">
                <div className="absolute -right-2.5 top-0 font-custom font-medium text-xs text-skin-base">
                  {currency ?? ""}
                </div>
                <div className="font-custom font-medium text-2xl text-skin-base">
                  {calculateIncomeAmount(essentialsRatio)?.toLocaleString(
                    "en-us"
                  )}
                </div>
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
                trackClassName="example-track"
                renderThumb={(props, state) => (
                  <SliderThumbComponent
                    valueNow={state.valueNow}
                    props={props}
                    showPercentage={showPercentage}
                  />
                )}
                onBeforeChange={() => setShowPercentage(true)}
                onAfterChange={() => setShowPercentage(false)}
                onChange={(value) => handleSliderChange(value, "essentials")}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full mt-16">
            <div className="justify-self-start font-medium text-2xl text-skin-base">
              Wants
            </div>
            <div className="justify-self-end font-medium text-2xl text-skin-base">
              <div className="relative">
                <div className="absolute -right-2.5 top-0 font-custom font-medium text-xs text-skin-base">
                  {currency ?? ""}
                </div>
                <div className="font-custom font-medium text-2xl text-skin-base">
                  {calculateIncomeAmount(wantsRatio)?.toLocaleString("en-us")}
                </div>
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
                trackClassName="example-track"
                renderThumb={(props, state) => (
                  <SliderThumbComponent
                    valueNow={state.valueNow}
                    props={props}
                    showPercentage={showPercentage}
                  />
                )}
                onBeforeChange={() => setShowPercentage(true)}
                onAfterChange={() => setShowPercentage(false)}
                onChange={(value) => handleSliderChange(value, "wants")}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full mt-16 mb-32">
            <div className="justify-self-start font-medium text-2xl text-skin-base">
              Savings
            </div>
            <div className="justify-self-end font-medium text-2xl text-skin-base">
              <div className="relative">
                <div className="absolute -right-2.5 top-0 font-custom font-medium text-xs text-skin-base">
                  {currency ?? ""}
                </div>
                <div className="font-custom font-medium text-2xl text-skin-base">
                  {calculateIncomeAmount(savingsRatio)?.toLocaleString("en-us")}
                </div>
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
                  />
                )}
                onBeforeChange={() => setShowPercentage(true)}
                onAfterChange={() => setShowPercentage(false)}
                onChange={(value) => handleSliderChange(value, "savings")}
              />
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
