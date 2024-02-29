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
import { useState } from "react";
import CustomLoader from "../components/Loader/CustomLoader";

const OnboardingStart = () => {
  const navigate = useNavigate();

  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const setToken = useConfigurationStore((state: any) => state.setToken);
  const setUser = useUserStore((state) => state.setUser);
  // add loading
  const [loading, setLoading] = useState(false);

  const authenticateUser = async () => {
    setLoading(true);
    const response = await getToken(configurations);
    if (response?.user) {
      setLoading(false);
      if (response?.user.is_onboarded) {
        navigate("/onboard-start");
        // navigate("/budgets-view");
      }
      setUser(response.user);
      setToken(response.token);
    } else {
      setLoading(false);
      navigate("/");
      showCustomToast({ message: "The sdk key is invalid" });
    }
  };

  const { data } = useQuery(["token"], () => authenticateUser, {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="h-screen w-screen relative no-scrollbar">
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          <CustomLoader />
        </div>
      ) : (
        <>
          <div className="h-1/4 absolute top-0 left-0 right-0">
            <NavBar
              children={
                <div className="flex flex-row items-center justify-between pt-5">
                  <CloseButton onClick={() => navigate(-1)} />
                  <NavBarTitle title="Create Monthly Budget" />
                  <div className="h-6 w-6 rounded-full"></div>
                </div>
              }
            />
            <div className="flex-grow h-px bg-skin-accent3"></div>
            <div className="flex flex-col mx-6 absolute top-28 left-0 right-0">
              <div className="flex flex-row justify-center mt-4">
                <div
                  className="w-96 h-96 bg-cover bg-local bg-center"
                  style={{ backgroundImage: `url(${splashImage})` }}
                ></div>
              </div>
              <div className="mt-6">
                <div className="flex flex-row justify-center mx-4 font-custom text-xl text-center font-medium tracking-title text-skin-base">
                  Unlock easy spend tracking and savings.
                </div>
                <div className="flex flex-row justify-center items center text-sm font-primary tracking-wide text-center text-skin-base mt-3 font-normal">
                  Set individual savings schedules or fun savings rules for each
                  goal you have.
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 right-0 mx-4">
            <MainButton
              title="Start Budgeting"
              click={() => {
                navigate("/onboard-add-income");
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default OnboardingStart;
