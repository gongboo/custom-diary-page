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
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      ></div>{" "}
      {isFocused && (
        <AdjustmentBar>
          <AdjustButton action={incHeight} label="+" id={props.id} />
          높이
          <AdjustButton action={decHeight} label="-" id={props.id} />
          <AdjustButton action={incColor} label="+" id={props.id} />
          색깔
          <AdjustButton action={decColor} label="-" id={props.id} />
          <AdjustButton
            action={deleteBlock}
            label="x"
            id={props.id}
            // styles={{
            //   backgroundColor: "red",
            // }}
          />
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default DotgridComponent;
