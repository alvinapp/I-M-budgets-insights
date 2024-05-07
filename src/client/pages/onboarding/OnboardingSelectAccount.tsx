import { FiCloud } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import MainButton from "../components/MainButton";
import NavBar from "../components/NavBar";
import ArrowBackButton from "../components/ArrowBack";
import AccountCard from "../components/AccountCard";

const OnboardingSelectAccount = () => {
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
            <div className="flex-grow h-px bg-skin-accent3"></div>
            <div className="flex flex-col mt-3 items-left">
                <div className="rounded-full h-11 w-11 bg-skin-iconPrimary flex justify-center items-center mx-3.5">
                    <FiCloud color="#101010" />
                </div>
                <div className="font-custom font-medium text-2xl mt-1.5 mx-3.5 text-skin-base">
                    Let's add your account
                </div>
                <div className="bg-addIncomeBg bg-cover bg-no-repeat h-36 bg-right">
                    <div className="text-sm font-primary text-skin-base tracking-wide mt-6 font-normal mx-3.5">
                        Connect your account effortlessly to streamline your financial management and gain spending insights
                        <br></br>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-18 mx-4.5 items-center">
                <AccountCard accountNumber="123456789" accountType="Online Savers-Lcy" isActive={true} />
                <AccountCard accountNumber="123456789" accountType="Paygo-Lcy" isActive={false} />
                <div className="h-1 w-[85%] bg-[#f5f5f5] mt-4 mb-4"></div>
                <AccountCard accountNumber="Sync your M-Pesa transactions" accountType="" backgroundColor="#5f9f31" isActive={false} />
            </div>
            <div className="fixed bottom-5 left-0 right-0 mx-3.5">
                <MainButton
                    title="Continue"
                    isDisabled={false}
                    click={() => {
                        navigate("/onboard-add-income");
                    }}
                />
            </div>
        </div>
    );
};

export default OnboardingSelectAccount;
