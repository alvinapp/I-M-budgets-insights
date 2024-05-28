import { FiPlus } from "react-icons/fi";
type AddButtonProps = {
  onClick?: () => void;
};
const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <button
      className="rounded-full text-white h-14 w-14 flex items-center justify-center p-2.5 bg-skin-primary shadow-button"
      onClick={onClick}
    >
      <FiPlus color="currentColor" size="1.4375rem" />
    </button>
  );
};
export default AddButton;
