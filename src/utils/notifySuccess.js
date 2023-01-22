import {toast } from 'react-toastify';


export const notifySuccess = (message, closeFunction) => toast.success(
    message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        onClose: typeof closeFunction === "function" && closeFunction(),
    })
