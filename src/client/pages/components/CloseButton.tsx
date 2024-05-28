import { FiX } from "react-icons/fi";

type CloseButtonProps = {
  onClick?: () => void;
  background?: string;
};
const CloseButton = ({ onClick, background }: CloseButtonProps) => {
  return (
    <button
      className={`rounded-full p-3 flex items-center justify-center outline outline-none ${background}`}
      onClick={onClick}
    >
      <FiX color="#101010" size="1.4375rem" />
    </button>
  );
};
export default CloseButton;
