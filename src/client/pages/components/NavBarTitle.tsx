import React from "react";

type NavBarTitleProps = {
  title?: string;
  titleColor?: string;
};
const NavBarTitle = ({ title, titleColor }: NavBarTitleProps) => {
  return (
    <div
      className={`tracking-title font-workSans font-semibold text-base ${
        titleColor != null ? titleColor : "text-black"
      }`}
    >
      {title}
    </div>
  );
};
export default NavBarTitle;
