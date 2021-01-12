import React from "react";
import { Spin } from "antd";
import "./index.css";

const CustomSpin = () => {
  return (
    <div className="spin-custom">
      <Spin size="large" />
    </div>
  );
};

export default CustomSpin;
