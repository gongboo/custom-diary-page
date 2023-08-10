import React from "react";

const AdjustmentBar = ({ children }) => (
  <div
    style={{
      position: "absolute",
      top: "-25px",
      height: "20px",
      backgroundColor: "yellow",
      padding: "5px",
    }}
  >
    {children}
  </div>
);

export default AdjustmentBar;
