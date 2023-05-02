import MainButton from "../components/MainButton";

const OnboardingStart = () => {
  return (
    <div className="h-screen w-screen relative no-scrollbar">
      <div className="h-1/4 absolute top-0 left-0 right-0">
        <div className="relative">
          <div className="absolute top-16 left-0 right-0 flex flex-col items-center">
            <div className="font-workSans font-semibold text-xl text-white tracking-subtitle">
              Setup Monthly Budget
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 mx-3.5">
        <MainButton
          title="Start Budgeting"
          click={() => {}}
        />
      </div>
    </div>
  );
};

export default OnboardingStart;
