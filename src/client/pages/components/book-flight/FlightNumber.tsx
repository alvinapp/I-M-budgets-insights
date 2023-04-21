type FlightNumberProps = {
  icon?: React.ReactNode;
  title?: string;
  fontSize?: string;
};
const FlightNumber = ({
  icon,
  title,
  fontSize = "text-tiny",
}: FlightNumberProps) => {
  return (
    <div className="flex flex-row items-center">
      <div className="text-skin-neutral mr-2">{icon}</div>
      <div
        className={`text-skin-base ${fontSize} font-poppins font-semibold tracking-longest_text text-`}
      >
        {title}
      </div>
    </div>
  );
};
export default FlightNumber;
