import {toast } from 'react-toastify';

export const notifyError = (message, closeFunction) => toast.error(
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
