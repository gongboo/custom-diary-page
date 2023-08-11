import React from "react";

const AdjustmentBar = ({ children, ...props }) => (
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
    <button
      onMouseDown={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
      onClick={() => {
        props.onDelete();
      }}
    >
      x
    </button>
  </div>
);

export default AdjustmentBar;