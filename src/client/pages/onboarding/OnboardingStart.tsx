import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import CloseButton from "../components/CloseButton";
import MainButton from "../components/MainButton";
import NavBar from "../components/NavBar";
import NavBarTitle from "../components/NavBarTitle";
import splashImage from "../../assets/images/onboarding-graphic.png";
import getToken from "client/api/token";
import { useConfigurationStore, IConfig } from "client/store/configuration";
import useUserStore from "client/store/userStore";
import { showCustomToast } from "client/utils/Toast";
import { useEffect, useState } from "react";
import CustomLoader from "../components/Loader/CustomLoader";
import { checkIfUserHasMicros } from "client/api/budget";
import { getMonoPubKey, postCode } from "client/api/mono";
import BackButton from "../components/BackButton";
import ActionButton from "../components/ActionButton";

const OnboardingStart = () => {
  const navigate = useNavigate();
  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const setToken = useConfigurationStore((state: any) => state.setToken);
  const setMonoPubKey = useConfigurationStore(
    (state: any) => state.setMonoPubKey
  );
  const fetchMonoToken = async ({
    configuration,
    setMonoPubKey,
  }: {
    configuration: IConfig;
    setMonoPubKey: any;
  }) => {
    return getMonoPubKey(configuration, configuration.country ?? "Nigeria")
      .then((data) => {
        if (!data) {
          return;
        }
        setMonoPubKey(data.key);
        configuration.monoPubKey = data.key;
      })
      .catch((error) => {});
  };
  useEffect(() => {
    if (!configurations.monoPubKey) {
      fetchMonoToken({ configuration: configurations, setMonoPubKey })
        .then(() => {})
        .catch((error) => {
          console.error("Failed to fetch Mono public key:", error);
        });
    }
  }, [configurations.monoPubKey, configurations.country, setMonoPubKey]);
  // const monoConnect = useMemo(() => {
  //   if (!configurations.monoPubKey && !configurations.token) {
  //     return null;
  //   }
  //   const monoInstance = new MonoConnect({
  //     onClose: () => {},
  //     onLoad: () => {},
  //     onSuccess: ({ code }: any) => {
  //       postCode(configurations, code, configurations.country ?? "Nigeria");
  //       navigate("/onboard-add-income");
  //     },
  //     key: configurations.monoPubKey,
  //   });
  //   monoInstance.setup();

  //   return monoInstance;
  // }, [configurations.monoPubKey, configurations.token]);

  // const onClick = () => {
  //   if (monoConnect) {
  //     monoConnect.open();
  //   }
  // };
  const setUser = useUserStore((state) => state.setUser);
  // add loading
  const [loading, setLoading] = useState(false);
  const authenticateUser = async () => {
    setLoading(true);
    const response = await getToken(configurations);
    if (response?.user) {
      setUser(response.user);
      setToken(response.token);
      await checkIfUserHasMicros({
        configuration: configurations,
        token: response.token,
      })
        .then((result) => {
          if (!response?.user.is_onboarded) {
            navigate("/");
          } else if (!result.has_micro_goals && response?.user.is_onboarded) {
            navigate("budget-settings");
          } else {
            navigate("/budgets-view");
          }
        })
        .finally(() => {
          setLoading(false);
        });
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
                  <BackButton onClick={() => navigate(-1)} />
                  <NavBarTitle title="" />
                  <div className="h-6 w-6 rounded-full"></div>
                </div>
              }
            />
            <div className="flex flex-col mx-6 absolute left-0 right-0">
              <div className="flex flex-row justify-center mt-4">
                <div className="w-96 h-96 bg-cover bg-center overflow-hidden">
                  <img
                    src={splashImage}
                    className="w-full h-[90%]"
                    alt="Splash"
                    style={{ marginTop: "2rem" }}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div className="flex flex-row justify-center font-custom text-xl text-start font-bold tracking-title text-skin-base mr-10">
                  Start budgeting on I&M On the Go by adding your account
                </div>
                <div className="flex flex-row justify-center items center text-sm font-primary tracking-wide text-start text-skin-base mt-3 font-medium mr-8">
                  Add your main account and Mpesa wallet to effortlessly balance
                  your daily spending around your I&M savings and payment
                  schedules using our powerful new budgeting and insights
                  features.
                </div>
                <div className="flex flex-row items-center text-sm font-primary tracking-wide text-start text-skin-base mt-3 font-medium mb-40">
                  In partnership with alvin
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-4 left-0 right-0 mx-4 bg-skin-base">
            <div className="flex flex-col">
              <div className="text-sm font-primary tracking-wide text-start text-skin-base mt-3 font-medium ml-2">
                By tapping "Add my first account", I agree to I&M's
              </div>
              <div className="text-skin-primary text-sm font-primary tracking-wide text-start font-medium ml-2 mb-2">
                Terms of Use
              </div>
              <MainButton
                isDisabled={!configurations.monoPubKey && !configurations.token}
                // title="Link account"
                title="Add my first account"
                click={() => {
                  navigate("/onboard-select-account");
                  // onClick();
                }}
              />
              <div className="mt-3">
                <ActionButton
                  bgColor="bg-[#f2f2f2]"
                  titleColor="text-skin-base"
                  title="Skip for now"
                  click={() => {
                    navigate("/onboard-add-income");
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OnboardingStart;
