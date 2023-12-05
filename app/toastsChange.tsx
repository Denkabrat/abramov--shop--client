import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.scss";


export const toastError = (message: string | undefined) =>{
  toast.error(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style:{borderRadius:0}
    });
}

export const toastSuccess = (message: string | undefined) =>{
  toast.success(message, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style:{borderRadius:0}
    });
}

export const toastWarning = (message: string | undefined) =>{
  toast.warn(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style:{borderRadius:0}
    });
}
