import React from "react";
type SearchLocationProps = {
  icon?: React.ReactNode;
  value?: string;
  placeHolder?: string;
  change: (e: any) => void;
};
const SearchLocation = ({
  icon,
  value,
  placeHolder,
  change,
}: SearchLocationProps) => {
  return (
    <div className="flex flex-row items-center">
      <div className="text-skin-base mr-5">{icon}</div>
      <div>
        <input
          type="text"
          className="text-base font-poppins tracking-progress_label w-64 border-transparent focus:border-transparent focus:ring-0"
          placeholder={placeHolder}
          onChange={(e) => {
            change(e.target.value);
          }}
          value={value}
        />
      </div>
    </div>
  );
};
export default SearchLocation;
