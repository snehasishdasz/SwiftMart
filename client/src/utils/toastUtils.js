// src/utils/toastUtils.js
import { toast } from "react-hot-toast";

export const showSuccessToast = (message) => {
  toast.success(message, {
    duration: 3000,
    position: "top-center",
    style: {
      background: "linear-gradient(135deg, #d9f99d, #a7f3d0)",
      color: "#065f46",
      padding: "14px 20px",
      borderRadius: "14px",
      fontSize: "15px",
      boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
    },
    iconTheme: {
      primary: "#065f46",
      secondary: "#ecfdf5",
    },
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    duration: 3000,
    position: "top-center",
    style: {
      background: "linear-gradient(135deg, #fecaca, #f87171)",
      color: "#7f1d1d",
      padding: "14px 20px",
      borderRadius: "14px",
      fontSize: "15px",
      boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
    },
    iconTheme: {
      primary: "#b91c1c",
      secondary: "#fff1f2",
    },
  });
};
