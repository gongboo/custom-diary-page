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

const DotgridComponent = (props) => {
  // const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  // const [colorLineThickness, setColorLineThickness] = useState(50);

  // const [height, increaseHeight, decreaseHeight] = useNumAttributeAdjuster(
  //   40,
  //   20
  // );
  // const [colorLightness, increaseColorLightness, decreaseColorLightness] =
  //   useNumAttributeAdjuster();
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
            "radial-gradient(" + color + " 1px, transparent 1px)", //,radial-gradient(#000 1px, transparent 1px)",
          backgroundSize:
            thisBlock.lineHeight + "px " + thisBlock.lineHeight + "px",
          // backgroundPosition: "0 0, 10px 10px",
          backgroundPosition: "top center",
        }}
      ></div>{" "}
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
            label="간격"
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
    </DiaryComponent>
  );
};

export default DotgridComponent;
