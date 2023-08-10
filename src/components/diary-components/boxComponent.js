import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";
import {
  useNumAttributeAdjuster,
  useFocus,
  useIsOrNot,
} from "./adjustmentHooks";
import DiaryComponent from "./diaryComponent";
import AdjustmentBar from "./adjustmentBar";

const BoxComponent = () => {
  const { isDragging, drag } = useDraggable();

  const [isFocused, setIsFocused, handleBlur] = useFocus();
  const [colorLineThickness, setColorLineThickness] = useState(50);

  const [height, increaseHeight, decreaseHeight] = useNumAttributeAdjuster();
  const [colorLightness, increaseColorLightness, decreaseColorLightness] =
    useNumAttributeAdjuster();

  const [isRound, changeIsRound] = useIsOrNot();

  return (
    <div>
      <DiaryComponent
        drag={drag}
        setIsFocused={setIsFocused}
        handleBlur={handleBlur}
      >
        <div
          style={{
            height: height,
            width: "100%",
            border: "solid hsl(0,0%," + colorLightness + "%)",
            borderRadius: isRound && "10px",
          }}
        ></div>
        {isFocused && (
          <AdjustmentBar>
            <button onMouseDown={increaseHeight}>+</button>
            높이
            <button onMouseDown={decreaseHeight}>-</button>
            <button onMouseDown={increaseColorLightness}>+</button>
            색깔
            <button onMouseDown={decreaseColorLightness}>-</button>
            <button
              onMouseDown={changeIsRound}
              style={{ backgroundColor: isRound ? "red" : "blue" }}
            >
              모서리 둥글게
            </button>
          </AdjustmentBar>
        )}
      </DiaryComponent>
    </div>
  );
};

export default BoxComponent;
