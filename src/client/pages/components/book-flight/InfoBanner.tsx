import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { FiPieChart } from "react-icons/fi";
type InfoBannerProps = {
  message?: string;
};
export const InfoBanner = ({ message }: InfoBannerProps) => {
  return (
    <div className="flex flex-row rounded-lg bg-skin-secondary2WithOpacity p-3.5">
      <div className="w-12 h-12 mr-3 flex flex-col justify-center">
        <CircularProgressbarWithChildren
          value={50}
          styles={buildStyles({
            pathColor: `#056489`,
            trailColor: `#E7EDF3`,
          })}
        >
          <FiPieChart color="#056489" size="1.25rem" />
        </CircularProgressbarWithChildren>
      </div>
      <div className="font-poppins font-medium text-base tracking-progress_label text-skin-info">
        {message}
      </div>
    </div>
  );
};
