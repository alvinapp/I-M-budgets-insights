import React from "react";
import loaderSvg from "../../../assets/images/Loader.svg";
import "./loader.css";

const CustomLoader: React.FC = () => {
  return (
    <div className="spinnerWrap">
      <div className="spinner">
        <img src={loaderSvg} alt="" id="loader-image" />
      </div>
    </div>
  );
};

export default CustomLoader;
