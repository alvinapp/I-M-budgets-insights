type NavBarTitleProps = {
  title?: string;
  titleColor?: string;
  fontSize?: string;
};
const NavBarTitle = ({ title, titleColor, fontSize }: NavBarTitleProps) => {
  return (
    <div
      className={`font-custom font-bold ${
        titleColor != null ? titleColor : "text-skin-base"
      } ${fontSize ?? "text-base"}`}
    >
      {title}
    </div>
  );
};
export default NavBarTitle;
