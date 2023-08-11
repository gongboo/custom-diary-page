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

const PictureDailyComponent = (props) => {
  const { isDragging, drag } = useDraggable();

  const [wordBlockWidth, setWordBlockWidth] = useState(50);
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  const [colorLineThickness, setColorLineThickness] = useState(50);

  const [height, increaseHeight, decreaseHeight] = useNumAttributeAdjuster(
    50,
    5
  );
  const [colorLightness, increaseColorLightness, decreaseColorLightness] =
    useNumAttributeAdjuster();
  const color = "hsl(0,0%," + colorLightness + "%)";
  const [rowNum, increaseRowNum, decreaseRowNum] = useNumAttributeAdjuster(
    4,
    1
  );
  const [colNum, increaseColNum, decreaseColNum] = useNumAttributeAdjuster(
    5,
    1
  );

  const wordBlocks = (rowNum, ColNum) => {
    const widgets = [];

    for (let i = 0; i < ColNum; i++) {
      widgets.push(
        <td
          style={{
            width: wordBlockWidth + "px",
            height: wordBlockWidth + "px",
            border: "solid " + color,
          }}
        ></td>
      );
    }
    const widget_total = [];
    for (let i = 0; i < rowNum; i++) {
      widget_total.push(<tr>{widgets}</tr>);
    }
    return (
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        {widget_total}
      </table>
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
          width: "100%",
        }}
      >
        <div style={{ border: "solid " + color, height: height + "px" }}></div>

        {wordBlocks(rowNum, colNum)}
      </div>
      {isFocused && (
        <AdjustmentBar onDelete={props.onDelete}>
          <button onMouseDown={increaseHeight}>+</button>
          높이
          <button onMouseDown={decreaseHeight}>-</button>
          <button onMouseDown={increaseColorLightness}>+</button>
          색깔
          <button onMouseDown={decreaseColorLightness}>-</button>
          <button onMouseDown={increaseRowNum}>+</button>
          가로
          <button onMouseDown={decreaseRowNum}>-</button>
          <button onMouseDown={increaseColNum}>+</button>
          세로
          <button onMouseDown={decreaseColNum}>-</button>
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default PictureDailyComponent;