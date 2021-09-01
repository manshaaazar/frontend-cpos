import React, { useState } from "react";
import jsbarcode from "jsbarcode";
import BarcodeForm from "./form";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiOutlineDownload,
} from "react-icons/hi";
import print from "print-js";
const BarcodeGen = ({}) => {
  const [rightValue, setRightValue] = useState("-400px");
  const [downloadbtn, setDownloadbtn] = useState(false);
  // barcode generator panel handler
  const openBarcodeGeneratorPanelHandler = () => {
    rightValue === "-400px" ? setRightValue("5px") : setRightValue("-400px");
  };
  // barcode generator handler
  const barcodeGeneratorHandler = (values) => {
    // get product id
    // get formate
    const { productId, formate } = values;

    const barcodeFrame = document.querySelector("#barcodeFrame");
    jsbarcode(barcodeFrame, productId, { formate, text: "barcode" });
    barcodeFrame.style.borderRadius = "4px";
    setDownloadbtn(true);
  };

  return (
    <div
      className="barcode-container absolute  h-2/4 w-96 flex flex-col justify-center items-center  bg-gray-300 rounded-md transition-all duration-200 ease-linear "
      style={{
        right: rightValue,
        top: "10%",
      }}
    >
      <p className="font-medium leading-10 text-lg text-gray-700 tracking-wide select-none">
        Barcode Generator
      </p>
      <div
        className="barcode-opener"
        onClick={() => openBarcodeGeneratorPanelHandler()}
        style={{ position: "absolute", bottom: "50%", left: "-40px" }}
      >
        {rightValue === "-400px" ? (
          <button className="">
            <HiChevronDoubleLeft />
          </button>
        ) : (
          <button className="">
            <HiChevronDoubleRight />
          </button>
        )}
      </div>
      <div
        className="barcode-content"
        style={{
          width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            borderStyle: "dashed",
            width: "310px",
          }}
        >
          {downloadbtn ? (
            <button
              className="absolute left-3/4 top-46 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean"
              onClick={() => print("barcodeFrame", "html")}
            >
              <HiOutlineDownload size="15px" />
            </button>
          ) : null}
          <img id="barcodeFrame" aria-label="barcode" />
        </div>

        <div className="Input-container">
          <BarcodeForm barcodeGeneratorHandler={barcodeGeneratorHandler} />
        </div>
      </div>
    </div>
  );
};

export default BarcodeGen;
