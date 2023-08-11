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

const CounterComponent = (props) => {
  const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  const [colorLineThickness, setColorLineThickness] = useState(50);

  const [countNum, increaseCountNum, decreaseCountNum] =
    useNumAttributeAdjuster(20, 1);
  const [colorLightness, increaseColorLightness, decreaseColorLightness] =
    useNumAttributeAdjuster();

  const color = "hsl(0,0%," + colorLightness + "%)";

  const oneParticle = (num) => {
    return (
      <div
        style={{
          border: "solid " + color,
          padding: "5px",
          width: "20px",
          color: color,
        }}
      >
        {num}
      </div>
    );
  };

  return (
    <DiaryComponent
      drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", //"space-between", //"center",
        }}
      >
        {Array.from({ length: countNum }).map((_, i) => oneParticle(i + 1))}
      </div>
      {isFocused && (
        <AdjustmentBar onDelete={props.onDelete}>
          <button onMouseDown={increaseCountNum}>+</button>
          갯수
          <button onMouseDown={decreaseCountNum}>-</button>
          <button onMouseDown={increaseColorLightness}>+</button>
          색깔
          <button onMouseDown={decreaseColorLightness}>-</button>
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default CounterComponent;
