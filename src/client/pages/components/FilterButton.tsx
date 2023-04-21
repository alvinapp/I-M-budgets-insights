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
          ? "bg-white rounded-md drop-shadow-lg"
          : "bg-icon_bg/20 rounded-md"
      } px-4 py-1 ml-4`}
      onClick={onClick}
      id={`${id}`}
    >
      <div
        className={`uppercase ${
          isActive
            ? "text-primary_light font-poppins text-xs font-semibold tracking-longtext"
            : "text-gray_light font-poppins text-xs font-semibold tracking-longtext"
        }`}
      >
        {label}
      </div>
    </button>
  );
};
export default FilterButton;
