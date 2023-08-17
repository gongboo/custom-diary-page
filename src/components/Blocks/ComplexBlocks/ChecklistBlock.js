import React, { useState } from "react";
import { ItemTypes } from "../../Constants/itemTypes";
import { useDrag } from "react-dnd";
import { useDraggable } from "../hooks/useDraggable";
import {
  useNumAttributeAdjuster,
  useFocus,
  useIsOrNot,
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
  incChecklist,
  decChecklist,
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";
const ChecklistComponent = (props) => {
  // const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  // const [numChecklist, increaseChecklist, decreaseChecklist] =
  //   useNumAttributeAdjuster(3, 1);
  // const [colorLightness, increaseColorLightness, decreaseColorLightness] =
  //   useNumAttributeAdjuster();
  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );
  const color = getColor(thisBlock.color);
  return (
    <DiaryComponent
      // drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      {oneCheckList(thisBlock.numChecklist)}

      {isFocused && (
        <AdjustmentBar>
          <AdjustButton action={incChecklist} label="+" id={props.id} />
          추가
          <AdjustButton action={decChecklist} label="-" id={props.id} />
          <AdjustButton action={incColor} label="+" id={props.id} />
          색깔
          <AdjustButton action={decColor} label="-" id={props.id} />
          {/* <button onMouseDown={increaseChecklist}>+</button>
          추가
          <button onMouseDown={decreaseChecklist}>-</button>
          <button onMouseDown={increaseColorLightness}>+</button>
          색깔
          <button onMouseDown={decreaseColorLightness}>-</button> */}
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
              border: "1px solid " + color,
            }}
          >
            {/* ♡☆○◇ */}
          </div>
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: color,
            }}
          ></div>
        </div>
      );
    }
    return widgets;
  }
};

export default ChecklistComponent;
