import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Navigate = ({ navTo, detail, heading }) => {
  const history = useHistory();
  const [clicked, setClicked] = useState();
  return (
    <div
      className={`nav-container h-20 p-2 hover:bg-ocean-light cursor-pointer transition-all duration-200 ease-linear ${clicked} `}
      onClick={() => {
        clicked ? setClicked(false) : setClicked("bg-ocean-light");
        history.push("/stock");
      }}
    >
      <div>
        <p className="font-medium text-white tracking-wide text-lg">
          {heading}
        </p>
        <div className="flex flex-row  justify-between items-center ">
          {detail.map((word, index) => (
            <span
              key={index}
              className="font-detail text-white  text-sm"
            >{`${word}`}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigate;
