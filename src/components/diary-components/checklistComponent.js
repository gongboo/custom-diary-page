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

const ChecklistComponent = () => {
  const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  const [numChecklist, increaseChecklist, decreaseChecklist] =
    useNumAttributeAdjuster(3, 1);
  const [colorLightness, increaseColorLightness, decreaseColorLightness] =
    useNumAttributeAdjuster();

  return (
    <DiaryComponent
      drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      {oneCheckList(numChecklist)}

      {isFocused && (
        <AdjustmentBar>
          <button onMouseDown={increaseChecklist}>+</button>
          추가
          <button onMouseDown={decreaseChecklist}>-</button>
          <button onMouseDown={increaseColorLightness}>+</button>
          색깔
          <button onMouseDown={decreaseColorLightness}>-</button>
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );

  function oneCheckList(num) {
    let i = 0;
    const widgets = [];
    for (i = 0; i < num; i++) {
      widgets.push(
        <div style={{ flexDirection: "row" }}>
          <div
            style={{
              height: "10px",
              width: "10px",
              margin: "5px",
              border: "1px solid hsl(0,0%," + colorLightness + "%)",
            }}
          >
            {/* ♡☆○◇ */}
          </div>
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "hsl(0,0%," + colorLightness + "%)",
            }}
          ></div>
        </div>
      );
    }
    return widgets;
  }
};

export default ChecklistComponent;
