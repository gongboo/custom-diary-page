import React from "react";
import { useSelector, useDispatch } from "react-redux";

function AdjustButton({ action, label, id, styles = {} }) {
  const dispatch = useDispatch();

  const handleMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(action(id));
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      className="btn-adjust-normal"
      style={styles}
    >
      {label}
    </button>
  );
}
export default AdjustButton;
