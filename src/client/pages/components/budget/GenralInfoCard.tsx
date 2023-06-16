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
};
export const GenralInfoCard = ({
  title,
  icon,
  iconBg,
  subtitle,
  caption,
  currencySymbol,
}: GeneralInfoCardProps) => {
  return (
    <div className="flex flex-col shadow-card p-4 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div
              className={`rounded-full h-8 w-8 flex justify-center items-center ${iconBg}`}
            >
              <div className="">{icon}</div>
            </div>
            <div className="font-poppins text-sm tracking-listtile_subtitle text-skin-base font-medium ml-4">
              {title}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="relative">
              <div className="absolute -right-1 -top-3 font-workSans font-semibold text-sm text-skin-neutral2 ">
                {currencySymbol ?? ""}
              </div>
              <div className="font-workSans font-semibold text-lg text-skin-neutral2">
                {caption}
              </div>
            </div>
            <div className="ml-1 font-semibold text-lg text-skin-neutral2">
              <FiChevronRight size="1rem" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-3.5 mx-1">
        <div className="font-poppins text-xs font-medium tracking-wide text-skin-subtitle">
          {subtitle}
        </div>
      </div>
    </div>
  );
};
