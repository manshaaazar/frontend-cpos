import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
const ConfirmationBox = ({
  btnproceedText,
  btnProceedHandler,
  btnCancelText,
  btnCancelHandler,
  message,
  setConfirmationBox,
}) => {
  return (
    <div className="absolute  h-screen w-screen flex flex-col items-center justify-center  shadow-inner ">
      <div className="w-96 h-40   bg-gray-300 flex flex-col justify-around items-center rounded-md ">
        <div className="flex justify-center items-center flex-wrap ">
          <HiOutlineExclamationCircle className="text-xl text-red-500" />
          <h4 className="  text-gray-700 font-normal text-sm m-2 text-center">
            {message}
          </h4>
        </div>
        <div className="confirmation-box-button-container flex justify-end items-center w-full mr-10 h-14">
          <button
            type="button"
            aria-label="proceed-button"
            onClick={() => {
              btnProceedHandler();
              setConfirmationBox(false);
            }}
            className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-dark"
          >
            {btnproceedText}
          </button>
          <button
            type="button"
            aria-label="cancel-button"
            onClick={() => btnCancelHandler()}
            className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-dark"
          >
            {btnCancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
