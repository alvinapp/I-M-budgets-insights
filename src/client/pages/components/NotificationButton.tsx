import notifications from "client/assets/images/savings/bell.svg";
type NotificaitonsButtonProps = {
  notificationCount?: number;
  onClick?: () => void;
};
const NotificaitonsButton = ({
  onClick,
  notificationCount = 0,
}: NotificaitonsButtonProps) => {
  return (
    <div className="relative">
      <button className="rounded-full" onClick={onClick}>
        <img src={notifications} />
      </button>
      {notificationCount > 0 ? (
        <div className="absolute top-0 right-0 rounded-full bg-skin-danger h-2 w-2"></div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default NotificaitonsButton;
