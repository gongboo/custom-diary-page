import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";
import { useNumAttributeAdjuster, useFocus } from "./adjustmentHooks";
import DiaryComponent from "./diaryComponent";
import AdjustmentBar from "./adjustmentBar";

const TextComponent = () => {
  const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  const [colorLineThickness, setColorLineThickness] = useState(50);

  const [size, increaseSize, decreaseSize] = useNumAttributeAdjuster();
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
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder="click and insert text"
          style={{
            border: "none",
            width: "100%",
            border: "none",
            outline: "none",
            font: size + "px 'Fira Sans', sans-serif",
            color: color,
          }}
        />
      </div>{" "}
      {isFocused && (
        <AdjustmentBar>
          <button onMouseDown={increaseSize}>+</button>
          높이
          <button onMouseDown={decreaseSize}>-</button>
          <button onMouseDown={increaseColorLightness}>+</button>
          색깔
          <button onMouseDown={decreaseColorLightness}>-</button>
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default TextComponent;
