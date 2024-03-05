type FilterButtonProps = {
  label?: string;
  onClick?: () => void;
  isActive?: boolean;
  id?: string;
  icon?: React.ReactNode;
};
const CashFlowFilterButton = ({
  label,
  onClick,
  isActive,
  id,
  icon,
}: FilterButtonProps) => {
  return (
    <button
      className={`flex flex-row ${
        isActive
          ? "bg-skin-secondaryWithOpacity rounded-full drop-shadow-lg"
          : " bg-skin-accent2 rounded-full"
      } px-4 py-1 mr-2 mb-3`}
      onClick={onClick}
      id={`${id}`}
    >
      <div
        className={`mr-1 ${isActive ? "text-skin-primary" : "text-skin-base"}`}
      >
        {icon}
      </div>
      <div
        className={`${
          isActive
            ? " text-skin-primary font-primary text-xs font-medium tracking-longtext"
            : " text-skin-subtitle font-primary text-xs font-medium tracking-longtext"
        }`}
      >
        {label}
      </div>
    </button>
  );
};
export default CashFlowFilterButton;
