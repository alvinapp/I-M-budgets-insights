import React from "react";
type CustomAmountButtonProps = {
  onClick?: () => void;
};
export const CustomAmountButton = ({ onClick }: CustomAmountButtonProps) => {
  return (
    <div className="rounded-full py-1 px-2 font-workSans text-xs tracking-widest bg-skin-secondaryWithOpacity text-skin-neutral">
      Custom amount
    </div>
  );
};
