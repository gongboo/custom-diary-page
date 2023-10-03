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
  incLineHeight,
  decLineHeight,
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";
import styles from "../styles/Block.module.css";
import IncDecGroup from "../AdjustmentBar/IncDecGroup";

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
          backgroundSize: "10px " + thisBlock.lineHeight + "px",
          // backgroundSize: "10px 30px",
        }}
      >
        {isFocused && (
          <AdjustmentBar>
            <IncDecGroup
              inc={incHeight}
              dec={decHeight}
              label="높이"
              id={props.id}
            />
            <IncDecGroup
              inc={incLineHeight}
              dec={decLineHeight}
              label="줄간격"
              id={props.id}
            />
            <IncDecGroup
              inc={incColor}
              dec={decColor}
              label="색깔"
              id={props.id}
            />
            <AdjustButton action={deleteBlock} label="x" id={props.id} />
          </AdjustmentBar>
        )}
      </div>
    </DiaryComponent>
  );
};

export default RuledComponent;
