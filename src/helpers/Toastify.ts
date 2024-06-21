import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successToast = (msg: string) => {
  toast.success(msg, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Flip,
  });
};
export const errorToast = (msg: string) => {
  toast.error(msg, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Flip,
  });
};
export const infoToast = (msg: string) => {
  toast.info(msg, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Flip,
  });
};
export const warnToast = (msg: string) => {
  toast.warn(msg, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Flip,
  });
};
