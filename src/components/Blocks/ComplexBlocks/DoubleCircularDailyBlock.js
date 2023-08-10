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

const DoubleCircularDailyComponent = () => {
  const { isDragging, drag } = useDraggable();
  //const [circleWidth, setCircleWidth] = useState(200);

  const [isFocused, setIsFocused, handleBlur] = useFocus();
  const [colorLineThickness, setColorLineThickness] = useState(50);

  const [circleWidth, increaseCircleWidth, decreaseCircleWidth] =
    useNumAttributeAdjuster(200, 5);
  const [colorLightness, increaseColorLightness, decreaseColorLightness] =
    useNumAttributeAdjuster();
  const color = "hsl(0,0%," + colorLightness + "%)";

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
              circleWidth / 2 +
              "px, 0) ",
          }}
        ></div>
      );
    }
    return <div>{items}</div>;
  };
  return (
    <DiaryComponent
      drag={drag}
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
            height: circleWidth,
            width: circleWidth,
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
            height: circleWidth,
            width: circleWidth,
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
        <AdjustmentBar>
          <button onMouseDown={increaseCircleWidth}>+</button>
          높이
          <button onMouseDown={decreaseCircleWidth}>-</button>
          <button onMouseDown={increaseColorLightness}>+</button>
          색깔
          <button onMouseDown={decreaseColorLightness}>-</button>
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default DoubleCircularDailyComponent;
