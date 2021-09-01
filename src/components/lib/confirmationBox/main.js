import React from "react";

const ConfirmationBox = ({
  btnproceedText,
  btnProceedHandler,
  btnCancelText,
  btnCancelHandler,
  message,
}) => {
  return (
    <div className="w-96 h-40 absolute right-1/4  bg-gray-300 flex flex-col justify-around items-center rounded-md">
      <h4 className="text-gray-700 font-normal text-sm m-2 text-center">
        {message}
      </h4>
      <div className="confirmation-box-button-container flex justify-end items-center w-full mr-10 h-14">
        <button
          type="button"
          aria-label="proceed-button"
          onClick={() => btnProceedHandler()}
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
  );
};

export default ConfirmationBox;
