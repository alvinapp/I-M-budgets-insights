import React from "react";

type NavbarProps = {
  children?: React.ReactNode;
};
const NavBar = ({ children }: NavbarProps) => {
  return <div>{children}</div>;
};

export default NavBar;
