import { capitalize } from "client/utils/Formatters";
import React from "react";
import { FiCheck } from "react-icons/fi";

type SearchDropDownProps = {
  data: Array<any>;
  onClick?: (result: any) => void;
};
export const SearchDropDown = ({ data, onClick }: SearchDropDownProps) => {
  return (
    <div>
      <div className="flex flex-col items-start">
        {data.length > 0 ? (
          data.map((city: any, i: number) => {
            return (
              <div
                className="flex flex-row"
                key={i}
                onClick={() => {
                  if (onClick) {
                    onClick(city);
                  }
                }}
              >
                <div className="text-skin-subtitle flex-col justify-center mr-2">
                  <FiCheck size="1.2rem" />
                </div>
                <div className="text-base font-primary font-medium tracking-progress_label flex flex-col">
                  {`${capitalize(city.address.cityName.toLowerCase())},`}
                </div>
                <span className="text-base font-primary font-medium tracking-progress_label">
                  {capitalize(city.address.countryName.toLowerCase())}
                </span>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
