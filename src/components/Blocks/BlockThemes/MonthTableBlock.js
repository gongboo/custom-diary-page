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
  incHeight,
  decHeight,
  incNameSpaceHeight,
  decNameSpaceHeight,
  incContentHeight,
  decContentHeight,
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";
import styles from "../styles/Block.module.css";
import IncDecGroup from "../AdjustmentBar/IncDecGroup";

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
      td_widgets.push(
        <td
          style={{
            position: "relative",
            border: "1px solid " + color,
            borderLeftWidth: 0,
            borderBottom: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0%",
              left: "0%",
              width: "20px",
              height: "20px",
              // border: "1px solid " + color,
              borderBottom: "1px solid " + color,
            }}
          ></div>
          {/* <div
            style={{
              position: "absolute",
              top: "0%",
              left: "0%",
              width: "20px",
              height: "20px",
              border: "1px solid " + color,
              borderRadius: "50%",
              // borderBottom: "1px solid " + color,
            }}
          ></div> */}
        </td>
      );
    }

    const total_widgets = [];

    for (i = 0; i < rowNum; i++) {
      total_widgets.push(
        <tr
          style={{
            borderCollapse: "collapse",
            border: "1px solid " + color,
            height: thisBlock.height + "px",
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
          <IncDecGroup
            inc={incHeight}
            dec={decHeight}
            label="높이"
            id={props.id}
          />
          <IncDecGroup
            inc={incColor}
            dec={decColor}
            label="색깔"
            id={props.id}
          />
          <IncDecGroup inc={incRow} dec={decRow} label="가로" id={props.id} />
          <IncDecGroup inc={incCol} dec={decCol} label="세로" id={props.id} />

          <AdjustButton action={deleteBlock} label="x" id={props.id} />
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default MonthTableComponent;
