import { FiCircle, FiCheckCircle } from "react-icons/fi";
type SuccessProgressProps = {
  timer: number;
  label?: string;
};

const SuccessProgress = ({ timer, label }: SuccessProgressProps) => {
  return (
    <>
      <div className="flex flex-row mb-10">
        <div>
          {timer <= 12 && timer >= 1 ? (
            <FiCircle color="rgba(255,255,255,0.5)" size="1.4375rem" />
          ) : (
            <FiCheckCircle color="#FFFFFF" size="1.4375rem" />
          )}
        </div>
        <div
          className={`${
            timer <= 12 && timer >= 1 ? " text-white/50" : " text-white "
          } font-primary text-base font-medium tracking-progress_label ml-4`}
        >
          {label}
        </div>
      </div>
    </>
  );
};
export default SuccessProgress;
