import emptyTransaction from "client/assets/images/budgets-insights/empty-transaction.svg";
type TransactionEmptyStateProps = {
  label?: string;
};
export const TransactionEmptyState = ({
  label,
}: TransactionEmptyStateProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={emptyTransaction} alt=""></img>
      <div className="flex-col">
        <div className="font-custom text-tiny text-label font-medium tracking-subtitle">
          {label}
        </div>
      </div>
    </div>
  );
};
