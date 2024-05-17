import React from "react";

interface ViewLinkedAccountsProps {
  accounts: Array<any>;
}
const ViewLinkedAccounts: React.FC<ViewLinkedAccountsProps> = ({
  accounts,
}) => {
  return (
    <div className="flex flex-col mx-3.5">
      {accounts && accounts.length > 0
        ? accounts.map((account: any, index: any) => {
            return <div></div>;
          })
        : null}
    </div>
  );
};

export default ViewLinkedAccounts;
