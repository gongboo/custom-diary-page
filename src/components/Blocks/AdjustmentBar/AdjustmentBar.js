import React from "react";

const AdjustmentBar = ({ children, ...props }) => (
  <div
    style={{
      position: "absolute",
      top: "-30px",
      height: "20px",
      backgroundColor: "var(--sub1-color)",
      padding: "5px",
      margin: "auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderTopLeftRadius: "5px 5px",
      borderTopRightRadius: "5px 5px",
    }}
  >
    {children}
  </div>
);

export default AdjustmentBar;
