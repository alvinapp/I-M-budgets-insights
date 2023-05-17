import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainButton from "../components/MainButton";
import NavBar from "../components/NavBar";
import ArrowBackButton from "../components/ArrowBack";
import ReactSlider from "react-slider";

const OnboardingSplitIncome = () => {
  const navigate = useNavigate();
  const [essentialsAmount, setEssentialsAmount] = useState(50);
  const [wantsAmount, setWantsAmount] = useState(30);
  const [savingsAmount, setsavingsAmount] = useState(20);
  const generateSliderValues = (length = 100) => new Array(length).fill(1).map((_, i) => i+1);

  return (
    <div className="h-screen w-screen relative no-scrollbar">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between pt-6 pb-2 pr-6">
            <ArrowBackButton onClick={() => navigate(-1)} />
          </div>
        }
      />

      <div className="h-3/4">
        <div className="flex flex-col mt-4 mx-10 items-left">
          <div className="font-workSans font-semibold text-xl tracking-subtitle">
            Whoop! Here is your recommended budget split.
          </div>
          <div className="text-xxs font-poppins tracking-longtext mt-4">
            The best practice for budgeting is 50% of your income for Essentials, 30% for Wants,
            then 20% for Savings. However, you can personalize your budget split below.
            <br></br>
          </div>
        </div>
        <div className="flex flex-col mt-12 mx-10 px-40 items-center">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="justify-self-start font-semibold">Essentials</div>
            <div className="justify-self-end font-semibold">{essentialsAmount} Naira</div>
            <div className="col-span-2">
              <ReactSlider
                  defaultValue={50}
                  className="horizontal-slider"
                  marks={generateSliderValues()}
                  markClassName="example-mark"
                  min={0}
                  max={100}
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  renderThumb={(props, state) => (
                    <div {...props}>{`${state.valueNow}%`}</div>
                  )}
                  onChange={(value) => {
                    setEssentialsAmount(value);
                  }}
                />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full mt-16">
            <div className="justify-self-start font-semibold">Wants</div>
            <div className="justify-self-end font-semibold">{wantsAmount} Naira</div>
            <div className="col-span-2">
              <ReactSlider
                  defaultValue={30}
                  className="horizontal-slider"
                  marks={generateSliderValues()}
                  markClassName="example-mark"
                  min={0}
                  max={100}
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  renderThumb={(props, state) => (
                    <div {...props}>{`${state.valueNow}%`}</div>
                  )}
                  onChange={(value) => {
                    setWantsAmount(value);
                  }}
                />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full mt-16">
            <div className="justify-self-start font-semibold">Savings</div>
            <div className="justify-self-end font-semibold">{savingsAmount} Naira</div>
            <div className="col-span-2">
              <ReactSlider
                  defaultValue={20}
                  className="horizontal-slider"
                  marks={generateSliderValues()}
                  markClassName="example-mark"
                  min={0}
                  max={100}
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  renderThumb={(props, state) => (
                    <div {...props}>{`${state.valueNow}%`}</div>
                  )}
                  onChange={(value) => {
                    setsavingsAmount(value);
                  }}
                />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 mx-3.5">
        <MainButton
          title="Continue"
          isDisabled={false}
          click={() => {
            navigate("/onboard-split-income");
          }}
        />
      </div>
    </div>
  );
};

export default OnboardingSplitIncome;
