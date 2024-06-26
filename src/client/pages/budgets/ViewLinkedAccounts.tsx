import useUserStore from "client/store/userStore";
import { useState } from "react";
import NavBar from "../components/NavBar";
import BackButton from "../components/BackButton";
import NavBarTitle from "../components/NavBarTitle";
import { useNavigate } from "react-router-dom";
import LinkAccountCard from "../components/budget/LinkAccountCard";
import mpesa from "../../assets/images/M-pesa-ac.png";
import { FiPlus } from "react-icons/fi";
import { BottomSheet } from "react-spring-bottom-sheet";
import UnlinkAccount from "../components/budget/UnlinkAccount";

const ViewLinkedAccounts = () => {
  const user = useUserStore((state: any) => state);
  const navigate = useNavigate();
  const linkedAccounts = user.user.external_linked_accounts.find(
    (element: any) => element?.name === "M-Pesa"
  );
  const finalLinkedAccounts = [linkedAccounts];
  const [removeAccountSheet, openRemoveAccountSheet] = useState(false);
  return (
    <div className="h-screen w-screen">
      <NavBar
        children={
          <div className="flex flex-row items-center justify-between border border-b-1 pt-4 pb-2 pr-3.5">
            <BackButton
              onClick={() => {
                navigate(-1);
              }}
            />
            <NavBarTitle title="Linked accounts" />
            <div
              className="h-6 w-6 rounded-full flex items-center justify-center"
              // onClick={() => navigate("/view-info")}
            >
              {/* <FiInfo color="#101010" size="1.5rem" /> */}
            </div>
          </div>
        }
      />
      <div className="flex flex-col mx-3.5 mt-3">
        {finalLinkedAccounts && finalLinkedAccounts.length > 0
          ? finalLinkedAccounts.map((account: any, index: any) => {
              return (
                <LinkAccountCard
                  logo={mpesa}
                  accountType={account?.type}
                  key={index}
                  onClick={() => {
                    openRemoveAccountSheet(true);
                  }}
                />
              );
            })
          : null}
      </div>
      <div className="flex flex-row mt-5 justify-center mb-3.5">
        <button className="flex flex-row items-center font-primary font-bold tracking-widest h-14 text-base rounded-full bg-[#f2f2f2] py-4 px-5">
          <FiPlus />
          <div>Link account</div>
        </button>
      </div>
      <BottomSheet
        onDismiss={() => {
          openRemoveAccountSheet(false);
        }}
        open={removeAccountSheet}
        style={{
          borderRadius: 24,
        }}
        children={<UnlinkAccount />}
        defaultSnap={400}
      ></BottomSheet>
    </div>
  );
};

export default ViewLinkedAccounts;
