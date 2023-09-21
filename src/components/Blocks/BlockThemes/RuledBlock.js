import React, { useState } from "react";
import { ItemTypes } from "../../Constants/itemTypes";
import { useDrag } from "react-dnd";
import { useDraggable } from "../hooks/useDraggable";
import {
  useNumAttributeAdjuster,
  useFocus,
} from "../AdjustmentBar/hooks/adjustmentHooks";
import DiaryComponent from "../BlockWrapper";
import AdjustmentBar from "../AdjustmentBar/AdjustmentBar";
import { useSelector } from "react-redux";

import AdjustButton from "../AdjustmentBar/AdjustButton";
import {
  incHeight,
  decHeight,
  incColor,
  decColor,
  deleteBlock,
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";
import styles from "../styles/Block.module.css";

const RuledComponent = (props) => {
  // const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();

  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );
  const color = getColor(thisBlock.color);

  return (
    <DiaryComponent
      // drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      <div
        style={{
          display: "inline-block",
          width: "100%",
          height: thisBlock.height + "px",
          backgroundImage:
            "linear-gradient(" + color + " 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        {isFocused && (
          <AdjustmentBar>
            <AdjustButton action={incHeight} label="+" id={props.id} />
            높이
            <AdjustButton action={decHeight} label="-" id={props.id} />
            <AdjustButton action={incColor} label="+" id={props.id} />
            색깔
            <AdjustButton action={decColor} label="-" id={props.id} />
            <AdjustButton action={deleteBlock} label="x" id={props.id} />
          </AdjustmentBar>
        )}
      </div>
    </DiaryComponent>
  );
};

export default RuledComponent;
