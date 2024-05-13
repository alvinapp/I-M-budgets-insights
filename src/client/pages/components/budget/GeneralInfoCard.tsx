import useCurrencySettingsStore from "client/store/currencySettingsStore";
import React from "react";
import { FiBriefcase, FiChevronRight } from "react-icons/fi";

type GeneralInfoCardProps = {
  title?: string;
  icon?: React.ReactNode;
  iconBg?: string;
  subtitle?: string;
  caption?: string;
  currencySymbol?: string;
  onClick?: () => void;
};
export const GeneralInfoCard = ({
  title,
  icon,
  iconBg,
  subtitle,
  caption,
  currencySymbol,
  onClick,
}: GeneralInfoCardProps) => {
  return (
    <div className="flex flex-col shadow-card p-4 rounded-lg" onClick={onClick}>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div
              className={`rounded-full h-8 w-8 flex justify-center items-center ${iconBg}`}
            >
              <div className="">{icon}</div>
            </div>
            <div className="font-primary text-base text-skin-base font-bold ml-4">
              {title}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="font-custom font-bold text-base text-skin-base">
              {caption}
              <sup className="font-custom font-bold text-xxs text-skin-base align-super">
                {currencySymbol}
              </sup>
            </div>
            <div className="ml-1 font-semibold text-lg text-skin-neutral2">
              <FiChevronRight size="1rem" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-2 mx-1">
        <div className="font-primary text-sm font-medium tracking-wide text-skin-base">
          {subtitle}
        </div>
      </div>
    </div>
  );
};
