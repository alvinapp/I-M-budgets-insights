import { Font } from "client/utils/Font";

type IntroHeaderProps = {
  title?: string;
  button?: boolean;
  titleFontSize?: string;
  onClick?: () => void;
};
const IntroHeader = ({
  title,
  button = true,
  titleFontSize,
  onClick,
}: IntroHeaderProps) => {
  return (
    <div className="flex justify-between items-center" onClick={onClick}>
      <div
        className={`text-black font-semibold font-custom tracking-wide ${Font.applyFontSize(
          { fontSize: titleFontSize, defaultFontSize: "text-base" }
        )}`}
      >
        {title}
      </div>
      {button ? (
        <button
          className="rounded-full bg-icon_bg/20 px-3 py-1 flex items-center text-gray_light"
          id="al__secondary-button"
        >
          <div className="font-primary font-medium text-xs tracking-longtext">
            View all
          </div>
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default IntroHeader;
