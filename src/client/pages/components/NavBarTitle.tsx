import React from "react";

type NavBarTitleProps = {
  title?: string;
  titleColor?: string;
  fontSize?: string;
};
const NavBarTitle = ({ title, titleColor, fontSize }: NavBarTitleProps) => {
  return (
    <div
      className={`tracking-title font-custom font-medium ${
        titleColor != null ? titleColor : "text-skin-base"
      } ${fontSize ?? "text-base"}`}
    >
      {title}
    </div>
  );
};
export default NavBarTitle;
