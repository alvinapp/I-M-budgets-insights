import uncategorized from "client/assets/images/uncategorized.svg";
import { BudgetTransaction } from "client/models/Budget";
import { Category } from "client/models/Categories";
import { Emoji } from "client/pages/components/Emoji";
import useCurrencySettingsStore from "client/store/currencySettingsStore";
import { checkIfDebitCredit, dateFormat } from "client/utils/Formatters";
const CategoryEmoji = ({ category }: { category: Category }) => {
  const isGoingOut = category.name === "Going out";
  if (!category)
    return (
      <div
        className="rounded-full  bg-skin-secondary1WithOpacity w-9 h-9 flex justify-center items-center
      "
      >
        <img src={uncategorized} alt="" />
      </div>
    );

  return (
    <div className="rounded-full w-9 h-9 flex justify-center  bg-skin-secondary1WithOpacity items-center">
      <Emoji
        symbol={isGoingOut ? "🤩" : category.emoji}
        label={isGoingOut ? "Entertainment" : category.name}
      />
    </div>
  );
};

const BudgetTransactionCard = ({
  merchant,
  transacted_at,
  category,
  amount,
  type,
  onClick,
}: BudgetTransaction) => {
  const transactedAt = new Date(transacted_at);
  const { name } = merchant;
  const currencyStore = useCurrencySettingsStore((state: any) => state);

  return (
    <div className="bg-skin-base w-auto mb-3" onClick={onClick}>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-2">
              <CategoryEmoji category={category} />
            </div>
            <div className="flex flex-col">
              <div
                className="font-custom text-sm font-medium text-skin-base text-start text-ellipsis overflow-hidden whitespace-nowrap w-40 tracking-title"
                id="al-transaction-card--merchant-name"
              >
                {name}
              </div>
              <div
                className="font-custom text-xs font-medium text-skin-subtitle text-start tracking-wider"
                id="al-transaction-card--date"
              >
                {dateFormat(transactedAt)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start mb-2">
          <div className="font-custom text-16 font-semibold text-skin-base text-end">
            <span>{checkIfDebitCredit(type)}</span>
            {Math.round(amount).toLocaleString("en-US")}
            <sup className="align-super -ml-1 text-xxxxxs">
              {currencyStore.currencySymbol}
            </sup>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BudgetTransactionCard;
