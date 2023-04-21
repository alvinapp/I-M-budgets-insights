import { toast } from "react-toastify";
type Toast = {
  message: string;
};
export const showCustomToast = ({ message }: Toast) => {
  toast(message, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    className: "toast",
    closeButton: false,
  });
};
