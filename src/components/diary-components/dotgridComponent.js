import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";
import { useNumAttributeAdjuster, useFocus } from "./adjustmentHooks";
import DiaryComponent from "./diaryComponent";
import AdjustmentBar from "./adjustmentBar";

const DotgridComponent = () => {
  const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  const [colorLineThickness, setColorLineThickness] = useState(50);

  const [height, increaseHeight, decreaseHeight] = useNumAttributeAdjuster(
    40,
    20
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
          display: "inline-block",
          width: "100%",
          height: height + "px",
          backgroundImage:
            "radial-gradient(" + color + " 1px, transparent 1px)", //,radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      ></div>{" "}
      {isFocused && (
        <AdjustmentBar>
          <button onMouseDown={increaseHeight}>+</button>
          높이
          <button onMouseDown={decreaseHeight}>-</button>
          <button onMouseDown={increaseColorLightness}>+</button>
          색깔
          <button onMouseDown={decreaseColorLightness}>-</button>
          <button onMouseDown={increaseColorLightness}>+</button>
          간격
          <button onMouseDown={decreaseColorLightness}>-</button>
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default DotgridComponent;
