import React from "react";

type NavBarTitleProps = {
  title?: string;
  titleColor?: string;
  fontSize?: string;
};
const NavBarTitle = ({ title, titleColor, fontSize }: NavBarTitleProps) => {
  return (
    <div
      className={`tracking-title font-workSans font-semibold ${
        titleColor != null ? titleColor : "text-black"
      } ${fontSize ?? "text-base"}`}
    >
      {title}
    </div>
  );
};
export default NavBarTitle;
