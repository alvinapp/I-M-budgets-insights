import { FiPlay } from "react-icons/fi";

type ResumeButtonProps = {
  onClick?: () => void;
  size?: string;
};
export const ResumeButton = ({ onClick, size }: ResumeButtonProps) => {
  return (
    <button
      className={`rounded-full ${
        size ? size : "h-14 w-14"
      } border border-1 border-skin-primary text-skin-primary flex items-center justify-center focus:outline-none focus:rounded-full p-2.5 `}
      onClick={onClick}
    >
      <FiPlay size="1.5rem" color="#056489" fill="#056489" />
    </button>
  );
};
