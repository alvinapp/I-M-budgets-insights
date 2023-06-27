import { FiChevronsDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import CloseButton from "../components/CloseButton";
import MainButton from "../components/MainButton";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import splashImage from "../../assets/images/money-in-one-app.svg";
import getToken from "client/api/token";
import { useConfigurationStore, IConfig } from "client/store/configuration";
import useUserStore from "client/store/userStore";
import { showCustomToast } from "client/utils/Toast";

const OnboardingStart = () => {
  const navigate = useNavigate();

  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const setToken = useConfigurationStore((state: any) => state.setToken);
  const setUser = useUserStore((state: any) => state.setUser);

  const authenticateUser = async () => {
    const response = await getToken(configurations);
    if (response?.user) {
      setUser(response.user);
      setToken(response.token);
    } else {
      navigate("/");
      showCustomToast({ message: "The sdk key is invalid" });
    }
  };

  const { data } = useQuery(["token"], () => authenticateUser, {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="h-screen w-screen relative no-scrollbar">
      <div className="h-1/4 absolute top-0 left-0 right-0">
        <NavBar
          children={
            <div className="flex flex-row items-center justify-between border border-b-1 pt-4 pb-2">
              <CloseButton onClick={() => navigate(-1)} />
              <NavBarTitle title="Setup Monthly Budget" />
              <div className="h-6 w-6 rounded-full"></div>
            </div>
          }
        />
        <div className="flex flex-col mx-6 absolute top-28 left-0 right-0">
          <div className="flex flex-row justify-center mt-4">
            <div className="w-96 h-96 bg-cover bg-local bg-center" style={{ backgroundImage: `url(${splashImage})` }}>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex flex-row justify-center mx-4 font-workSans text-base text-center font-semibold">
              Unlock easy spend tracking and savings.
            </div>
            <div className="flex flex-row justify-center text-xs font-poppins tracking-longtext text-center text-[#101010] mt-4">
              Set individual savings schedules or fun savings rules for each goal you have.
            </div>
            <div className="flex flex-row justify-center mt-10">
              <FiChevronsDown height="1.75em" width="1.75em" />
            </div>
            <div className="flex flex-row justify-center text-xs font-poppins font-semibold text-center text-[#6F89A5] mt-1">
              Learn more
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 mx-3.5">
        <MainButton
          title="Start Budgeting"
          click={() => {
            navigate("/onboard-add-income");
          }}
        />
      </div>
    </div>
  );
};

export default OnboardingStart;
