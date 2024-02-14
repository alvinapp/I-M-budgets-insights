type FilterButtonProps = {
  label?: string;
  onClick?: () => void;
  isActive?: boolean;
  id?: string;
};
const FilterButton = ({ label, onClick, isActive, id }: FilterButtonProps) => {
  return (
    <button
      className={`${
        isActive
          ? "bg-skin-secondaryWithOpacity rounded-full drop-shadow-lg"
          : " bg-skin-accent2 rounded-full"
      } px-4 py-1 mr-2 mb-3`}
      onClick={onClick}
      id={`${id}`}
    >
      <div
        className={`${
          isActive
            ? " text-skin-primary font-poppins text-xs font-semibold tracking-longtext"
            : " text-skin-subtitle font-poppins text-xs font-semibold tracking-longtext"
        }`}
      >
        {label}
      </div>
    </button>
  );
};
export default FilterButton;
