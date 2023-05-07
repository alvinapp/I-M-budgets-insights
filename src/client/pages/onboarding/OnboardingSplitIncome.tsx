import MainButton from "../components/MainButton";

const OnboardingSplitIncome = () => {
  return (
    <div className="h-screen w-screen relative no-scrollbar">
      <div className="h-1/4 absolute top-0 left-0 right-0">
        <div className="relative">
          <div className="absolute top-16 left-0 right-0 flex flex-col items-center">
            <div className="font-workSans font-semibold text-xl tracking-subtitle">
              Whoop! Here is your recommended budget split.
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-9 absolute top-28 left-0 right-0">
          <div className="text-xxxs font-poppins tracking-longtext text-center mt-4">
            The best practice for budgeting is 50% of your income for Essentials, 30% for Wants,
            then 20% for Savings. However, you can personalize your budget split below.
            <br></br>
            <a href="/404-not-found">Learn More</a>
          </div>
      </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 mx-3.5">
        <MainButton
          title="Continue"
          click={() => {}}
        />
      </div>
    </div>
  );
};

export default OnboardingSplitIncome;
