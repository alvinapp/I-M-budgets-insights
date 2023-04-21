import FilterButton from "client/pages/components/FilterButton";

type MyAccountFiltersProps = {
  accounts?: Array<any>;
  activeAccount?: any;
  onClick?: (account: any) => void;
};

const MyAccountFilters = ({
  accounts,
  activeAccount,
  onClick,
}: MyAccountFiltersProps) => {
  return (
    <div className="whitespace-nowrap overflow-auto no-scrollbar py-3">
      {accounts?.map((element: any, i) => {
        const isActive = element.account_id == activeAccount?.account_id;
        return (
          <FilterButton
            label={element.name}
            key={i}
            isActive={isActive}
            onClick={() => {
              if (onClick) {
                onClick(element);
              }
            }}
            id={`${i}`}
          />
        );
      })}
    </div>
  );
};

export default MyAccountFilters;
