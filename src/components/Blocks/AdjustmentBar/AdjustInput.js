import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function AdjustInput({ action, label, id, styles = {} }) {
  const dispatch = useDispatch();

  const handleMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(action(id));
  };

  return <div>{/* 미구현 */}</div>;
}
export default AdjustInput;
