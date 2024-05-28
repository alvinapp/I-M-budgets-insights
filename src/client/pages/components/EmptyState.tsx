import noTransactions from "client/assets/images/budgets-insights/no-transactions.svg";
type TransactionEmptyStateProps = {
  label?: string;
};
export const TransactionEmptyState = ({
  label,
}: TransactionEmptyStateProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-20 w-20 bg-skin-iconPrimary rounded-full">
        <img src={noTransactions} alt="" className="h-16 w-16"></img>
      </div>
      <div className="flex-col mt-3">
        <div className="font-primary text-tiny text-label font-medium tracking-subtitle">
          {label}
        </div>
      </div>
    </div>
  );
};
