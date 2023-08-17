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
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";
import styles from "../styles/Block.module.css";

const PictureDailyComponent = (props) => {
  // const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();

  // const [wordBlockWidth, setWordBlockWidth] = useState(50);
  // const [colorLineThickness, setColorLineThickness] = useState(50);

  // const [height, increaseHeight, decreaseHeight] = useNumAttributeAdjuster(
  //   50,
  //   5
  // );
  // const [colorLightness, increaseColorLightness, decreaseColorLightness] =
  //   useNumAttributeAdjuster();
  // const color = "hsl(0,0%," + colorLightness + "%)";
  // const [rowNum, increaseRowNum, decreaseRowNum] = useNumAttributeAdjuster(
  //   4,
  //   1
  // );
  // const [colNum, increaseColNum, decreaseColNum] = useNumAttributeAdjuster(
  //   5,
  //   1
  // );
  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );

  const color = getColor(thisBlock.color);

  const wordBlocks = (rowNum, colNum) => {
    const widgets = [];

    for (let i = 0; i < colNum; i++) {
      widgets.push(
        <td
          style={{
            width: "50px",
            height: "50px",
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
      // drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{ border: "solid " + color, height: thisBlock.height + "px" }}
        ></div>

        {wordBlocks(thisBlock.rowNum, thisBlock.colNum)}
      </div>
      {isFocused && (
        <AdjustmentBar>
          <AdjustButton action={incHeight} label="+" id={props.id} />
          높이
          <AdjustButton action={decHeight} label="-" id={props.id} />
          <AdjustButton action={incColor} label="+" id={props.id} />
          색깔
          <AdjustButton action={decColor} label="-" id={props.id} />
          <AdjustButton action={incRow} label="+" id={props.id} />
          가로
          <AdjustButton action={decRow} label="-" id={props.id} />
          <AdjustButton action={incCol} label="+" id={props.id} />
          세로
          <AdjustButton action={decCol} label="-" id={props.id} />
          <AdjustButton
            action={deleteBlock}
            label="x"
            id={props.id}
            // styles={{
            //   backgroundColor: "red",
            // }}
          />
          {/* <button onMouseDown={increaseHeight}>+</button>
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
          <button onMouseDown={decreaseColNum}>-</button> */}
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default PictureDailyComponent;
