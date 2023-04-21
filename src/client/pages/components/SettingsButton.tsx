import React from "react";
import settings from "client/assets/images/savings/settings.svg";
type SettingsButtonProps = {
  onClick?: () => void;
  background?: string;
  icon?: string;
};
const SettingsButton = ({ onClick, background, icon }: SettingsButtonProps) => {
  return (
    <button
      className={`rounded-full p-3 flex items-center justify-center ${background}`}
      onClick={onClick}
    >
      <img src={icon ?? settings} />
    </button>
  );
};
export default SettingsButton;
