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
  incRow,
  decRow,
  incCol,
  decCol,
  incNameSpaceHeight,
  decNameSpaceHeight,
  incContentHeight,
  decContentHeight,
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";
const DoubleCircularDailyComponent = (props) => {
  // const { isDragging, drag } = useDraggable();

  const [isFocused, setIsFocused, handleBlur] = useFocus();
  // const [colorLineThickness, setColorLineThickness] = useState(50);

  // const [circleWidth, increaseCircleWidth, decreaseCircleWidth] =
  //   useNumAttributeAdjuster(200, 5);
  // const [colorLightness, increaseColorLightness, decreaseColorLightness] =
  //   useNumAttributeAdjuster();
  // const color = "hsl(0,0%," + colorLightness + "%)";

  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );
  const color = getColor(thisBlock.color);

  const scaleMark = () => {
    const numberOfItems = 12;
    const items = [];

    for (let i = 0; i < numberOfItems; i++) {
      items.push(
        <div
          style={{
            position: "absolute",
            width: "10px",
            height: "1px",
            backgroundColor: color,
            bottom: "50%",
            left: "50%",
            transform:
              "translate(-50%, -50%) rotate(" +
              30 * i +
              "deg) translate(" +
              thisBlock.height / 2 +
              "px, 0) ",
          }}
        ></div>
      );
    }
    return <div>{items}</div>;
  };
  return (
    <DiaryComponent
      // drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            position: "relative",
            height: thisBlock.height,
            width: thisBlock.height,
            borderRadius: "50%",
            border: "solid " + color,
            display: "inline-block",
          }}
        >
          {scaleMark()}
          <div
            style={{
              position: "absolute",
              height: "1px",
              width: "1px",
              bottom: "50%",
              left: "50%",
              borderRadius: "50%",
              border: "solid " + color,
              backgroundColor: color,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "relative",
            height: thisBlock.height,
            width: thisBlock.height,
            borderRadius: "50%",
            border: "solid " + color,
            display: "inline-block",
          }}
        >
          {scaleMark()}
          <div
            style={{
              position: "absolute",
              height: "1px",
              width: "1px",
              bottom: "50%",
              left: "50%",
              borderRadius: "50%",
              border: "solid " + color,
              backgroundColor: color,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      </div>{" "}
      {isFocused && (
        <AdjustmentBar onDelete={props.onDelete} id={props.id}>
          <AdjustButton action={incHeight} label="+" id={props.id} />
          높이
          <AdjustButton action={decHeight} label="-" id={props.id} />
          <AdjustButton action={incColor} label="+" id={props.id} />
          색깔
          <AdjustButton action={decColor} label="-" id={props.id} />
          {/* <button onMouseDown={increaseCircleWidth}>+</button>
          높이
          <button onMouseDown={decreaseCircleWidth}>-</button>
          <button onMouseDown={increaseColorLightness}>+</button>
          색깔
          <button onMouseDown={decreaseColorLightness}>-</button> */}
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default DoubleCircularDailyComponent;
