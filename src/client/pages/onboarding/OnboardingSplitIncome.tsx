import { useNavigate } from "react-router-dom";

import MainButton from "../components/MainButton";
import NavBar from "../components/NavBar";
import ArrowBackButton from "../components/ArrowBack";

const OnboardingSplitIncome = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen relative no-scrollbar">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between pt-6 pb-2 pr-6">
            <ArrowBackButton onClick={() => navigate(-1)} />
          </div>
        }
      />

      <div className="h-1/4">
        <div className="flex flex-col mt-14 mx-10 items-left">
          <div className="font-workSans font-semibold text-xl tracking-subtitle">
            Whoop! Here is your recommended budget split.
          </div>
        </div>
        <div className="flex flex-col mt-4 mx-10 items-left">
          <div className="text-xxxs font-poppins tracking-longtext">
            The best practice for budgeting is 50% of your income for Essentials, 30% for Wants,
            then 20% for Savings. However, you can personalize your budget split below.
            <br></br>
            <a href="/404-not-found">Learn More</a>
          </div>
        </div>
        <div className="flex flex-col mt-48 mx-10 px-40 items-center">
          <input
            type="number"
            name="monthly-net-income"
            id="monthlyNetIncome"
            className="block w-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0"
          />
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
