import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";
import { useNumAttributeAdjuster, useFocus } from "./adjustmentHooks";
import DiaryComponent from "./diaryComponent";
import AdjustmentBar from "./adjustmentBar";

const LineComponent = () => {
  const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  const [colorLineThickness, setColorLineThickness] = useState(50);

  const [height, increaseHeight, decreaseHeight] = useNumAttributeAdjuster(
    2,
    1
  );
  const [colorLightness, increaseColorLightness, decreaseColorLightness] =
    useNumAttributeAdjuster();
  const color = "hsl(0,0%," + colorLightness + "%)";

  return (
    <DiaryComponent
      drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      <div
        style={{
          height: height + "px",
          width: "100%",
          backgroundColor: color,
          margin: "3px 0px 3px 0px",
        }}
      ></div>
      {isFocused && (
        <AdjustmentBar>
          <button onMouseDown={increaseHeight}>+</button>
          굵기
          <button onMouseDown={decreaseHeight}>-</button>
          <button onMouseDown={increaseColorLightness}>+</button>
          색깔
          <button onMouseDown={decreaseColorLightness}>-</button>
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default LineComponent;
