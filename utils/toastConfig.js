import { toast } from 'react-toastify';

const toastConfig = {
  position: "top-right",
  autoClose: 3000, // Close after 3 seconds
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'light', // You can change this to 'dark' if needed
};

// Toast wrapper functions
export const showSuccessToast = (message) => {
  toast.success(message, toastConfig);
};

export const showErrorToast = (message) => {
  toast.error(message, toastConfig);
};

export const showInfoToast = (message) => {
  toast.info(message, toastConfig);
};

export const showWarningToast = (message) => {
  toast.warning(message, toastConfig);
};
