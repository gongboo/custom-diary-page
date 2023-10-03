import React from "react";
import AdjustButton from "../AdjustmentBar/AdjustButton";

const IncDecGroup = (props) => {
  return (
    <>
      <AdjustButton action={props.inc} label="+" id={props.id} />
      {props.label}
      <AdjustButton action={props.dec} label="-" id={props.id} />
    </>
  );
};
export default IncDecGroup;
