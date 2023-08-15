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
  incNameSpaceHeight,
  decNameSpaceHeight,
  incContentHeight,
  decContentHeight,
} from "../../../ReduxFiles/actions";

const MonthTableComponent = (props) => {
  // const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  // const [colorLineThickness, setColorLineThickness] = useState(50);

  // const [nameSpaceHeight, increaseNameSpaceHeight, decreaseNameSpaceHeight] =
  //   useNumAttributeAdjuster(20, 10);
  // const [contentHeight, increaseContentHeight, decreaseContentHeight] =
  //   useNumAttributeAdjuster(40, 10);

  // const [colorLightness, increaseColorLightness, decreaseColorLightness] =
  //   useNumAttributeAdjuster();
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
  const color = "hsl(0,0%," + thisBlock.color + "%)";

  const drawTable = (rowNum, colNum) => {
    const td_widgets = [];
    let i = 0;
    for (i = 0; i < colNum; i++) {
      td_widgets.push(<td style={{ border: "solid " + color }}></td>);
    }

    const total_widgets = [];

    for (i = 0; i < rowNum; i++) {
      total_widgets.push(
        <tr style={{ height: thisBlock.nameSpaceHeight + "px", width: "100%" }}>
          {td_widgets}
        </tr>
      );
      total_widgets.push(
        <tr style={{ height: thisBlock.contentHeight + "px", width: "100%" }}>
          {td_widgets}
        </tr>
      );
    }
    return (
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        {total_widgets}
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
        {drawTable(thisBlock.rowNum, thisBlock.colNum)}
      </div>
      {isFocused && (
        <AdjustmentBar>
          <AdjustButton action={incNameSpaceHeight} label="+" id={props.id} />
          높이1
          <AdjustButton action={decNameSpaceHeight} label="-" id={props.id} />
          <AdjustButton action={incContentHeight} label="+" id={props.id} />
          높이2
          <AdjustButton action={decContentHeight} label="-" id={props.id} />
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
          {/* <button onMouseDown={increaseNameSpaceHeight}>+</button>
          높이1
          <button onMouseDown={decreaseNameSpaceHeight}>-</button>
          <button onMouseDown={increaseContentHeight}>+</button>
          높이2
          <button onMouseDown={decreaseContentHeight}>-</button>
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

export default MonthTableComponent;
