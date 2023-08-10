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

const CircularDailyComponent = () => {
  const { isDragging, drag } = useDraggable();
  const [circleWidth, setCircleWidth] = useState(300);
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  const [height, increaseHeight, decreaseHeight] = useNumAttributeAdjuster();
  const [colorLightness, increaseColorLightness, decreaseColorLightness] =
    useNumAttributeAdjuster();

  const scaleMark = () => {
    const numberOfItems = 24;
    const items = [];

    for (let i = 0; i < numberOfItems; i++) {
      items.push(
        <div
          style={{
            position: "absolute",
            width: "10px",
            height: "1px",
            backgroundColor: "black",
            bottom: "50%",
            left: "50%",
            transform:
              "translate(-50%, -50%) rotate(" +
              15 * i +
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
        }}
      >
        <div
          style={{
            position: "relative",
            height: circleWidth,
            width: circleWidth,
            borderRadius: "50%",
            border: "solid",
            display: "inline-block",
          }}
        >
          {scaleMark()}
          <div
            style={{
              position: "absolute",
              height: "3px",
              width: "3px",
              bottom: "50%",
              left: "50%",
              borderRadius: "50%",
              border: "solid",
              backgroundColor: "black",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      </div>{" "}
      {isFocused && (
        <AdjustmentBar>
          <button onMouseDown={increaseHeight}>+</button>
          높이
          <button onMouseDown={decreaseHeight}>-</button>
          <button onMouseDown={increaseColorLightness}>+</button>
          색깔
          <button onMouseDown={decreaseColorLightness}>-</button>
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default CircularDailyComponent;
