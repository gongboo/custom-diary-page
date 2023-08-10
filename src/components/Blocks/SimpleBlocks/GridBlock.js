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

const GridComponent = () => {
  const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  //const [colorLineThickness, setColorLineThickness] = useState(50);
  const [height, increaseHeight, decreaseHeight] = useNumAttributeAdjuster(
    60,
    20
  );
  const [colorLightness, increaseColorLightness, decreaseColorLightness] =
    useNumAttributeAdjuster();

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
            "linear-gradient(hsl(0,0%," +
            colorLightness +
            "%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%," +
            colorLightness +
            "%) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
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
      </div>
    </DiaryComponent>
  );
};

export default GridComponent;
