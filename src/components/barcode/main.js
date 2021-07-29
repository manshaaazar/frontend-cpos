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
      className="barcode-container"
      style={{
        backgroundColor: "#BEAEE2",
        height: "80vh",
        width: "400px",
        position: "absolute",
        right: rightValue,
        top: "10%",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "right 0.5s ease-out",
      }}
    >
      <div
        className="barcode-opener"
        onClick={() => openBarcodeGeneratorPanelHandler()}
        style={{ position: "absolute", bottom: "50%", left: "-31px" }}
      >
        {rightValue === "-400px" ? (
          <button className="btn btn-outline-dark btn-sm">
            <HiChevronDoubleLeft />
          </button>
        ) : (
          <button className="btn btn-outline-dark btn-sm">
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
              className="btn btn-outline-dark btn-sm"
              style={{
                position: "absolute",
                top: "202px",
                left: "320px",
                zIndex: "200",
              }}
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
