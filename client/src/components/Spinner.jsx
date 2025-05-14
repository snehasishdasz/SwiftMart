import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(3); // Countdown starts from 3 seconds
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate("/login");
      return;
    }
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 z-50"
      style={{ minHeight: "100vh" }}
    >
      <span className="loader"></span>
      <style>{`
        .loader {
          animation: rotate 1s infinite;
          height: 50px;
          width: 50px;
          display: inline-block;
          position: relative;
        }

        .loader:before,
        .loader:after {
          border-radius: 50%;
          content: "";
          display: block;
          height: 20px;
          width: 20px;
          position: absolute;
          left: 0;
        }
        .loader:before {
          animation: ball1 1s infinite;
          background-color: #1e3a8a; /* dark blue */
          box-shadow: 30px 0 0 #ff3d00;
          margin-bottom: 10px;
          top: 0;
        }
        .loader:after {
          animation: ball2 1s infinite;
          background-color: #ff3d00;
          box-shadow: 30px 0 0 #1e3a8a; /* dark blue */
          top: 30px;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg) scale(0.8) }
          50% { transform: rotate(360deg) scale(1.2) }
          100% { transform: rotate(720deg) scale(0.8) }
        }

        @keyframes ball1 {
          0% {
            box-shadow: 30px 0 0 #ff3d00;
          }
          50% {
            box-shadow: 0 0 0 #ff3d00;
            margin-bottom: 0;
            transform: translate(15px, 15px);
          }
          100% {
            box-shadow: 30px 0 0 #ff3d00;
            margin-bottom: 10px;
          }
        }

        @keyframes ball2 {
          0% {
            box-shadow: 30px 0 0 #1e3a8a; /* dark blue */
          }
          50% {
            box-shadow: 0 0 0 #1e3a8a; /* dark blue */
            margin-top: -20px;
            transform: translate(15px, 15px);
          }
          100% {
            box-shadow: 30px 0 0 #1e3a8a; /* dark blue */
            margin-top: 0;
          }
        }
      `}</style>
      <h1 className="mt-4 text-lg font-semibold text-gray-700">
        Redirecting you to Login Page in {count} seconds...
      </h1>
    </div>
  );
};

export default Spinner;
