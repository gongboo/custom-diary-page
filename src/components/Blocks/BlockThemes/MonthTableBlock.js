import React from "react";

import { useFocus } from "../AdjustmentBar/hooks/adjustmentHooks";
import DiaryComponent from "../BlockWrapper";
import AdjustmentBar from "../AdjustmentBar/AdjustmentBar";
import { useSelector } from "react-redux";
import AdjustButton from "../AdjustmentBar/AdjustButton";
import {
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
import { getColor } from "../common";
import styles from "../styles/Block.module.css";

const MonthTableComponent = (props) => {
  // const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();

  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );
  const color = getColor(thisBlock.color);

  const drawTable = (rowNum, colNum) => {
    const td_widgets = [];
    let i = 0;
    for (i = 0; i < colNum; i++) {
      if (i === 0) {
        td_widgets.push(
          <td
            style={{
              border: "1px solid " + color,
              borderBottom: 0,
            }}
          ></td>
        );
      } else {
        td_widgets.push(
          <td
            style={{
              border: "1px solid " + color,
              borderLeftWidth: 0,
              borderBottom: 0,
            }}
          ></td>
        );
      }
    }

    const total_widgets = [];

    for (i = 0; i < rowNum; i++) {
      total_widgets.push(
        <tr
          style={{
            borderCollapse: "collapse",
            border: "1px solid " + color,
            height: thisBlock.nameSpaceHeight + "px",
            width: "100%",
          }}
        >
          {td_widgets}
        </tr>
      );
      total_widgets.push(
        <tr
          style={{
            borderCollapse: "collapse",
            border: "1px solid " + color,
            height: thisBlock.contentHeight + "px",
            width: "100%",
          }}
        >
          {td_widgets}
        </tr>
      );
    }
    return (
      <table
        style={{
          borderCollapse: "collapse",
          // border: "1px gray solid",
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
          <AdjustButton action={deleteBlock} label="x" id={props.id} />
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default MonthTableComponent;
