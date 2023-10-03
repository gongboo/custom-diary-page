import React, { useState } from "react";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";
import { useFocus } from "../../hooks/adjustmentHooks";
import DiaryComponent from "./diaryComponent";
import AdjustmentBar from "./adjustmentBar/adjustmentBar";
import { getColor } from "../common";
import IncDecGroup from "../AdjustmentBar/IncDecGroup";
//사용 안하고 있음
const ProgressComponent = (props) => {
  const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();

  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );

  const color = "hsl(0,0%," + thisBlock.color + "%)";

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
        <table style={{ borderCollapse: "collapse" }}>
          <tr className={styles.tableRow}>
            <td className={styles.tableCol}></td>
            <td className={styles.tableCol}></td>
            <td className={styles.tableCol}></td>
          </tr>
        </table>
      </div>
      {isFocused && (
        <AdjustmentBar onDelete={props.onDelete} id={props.id}>
          <AdjustButton action={incHeight} label="+" id={props.id} />
          높이
          <AdjustButton action={decHeight} label="-" id={props.id} />
          <AdjustButton action={incColor} label="+" id={props.id} />
          색깔
          <AdjustButton action={decColor} label="-" id={props.id} />
          <AdjustButton action={deleteBlock} label="x" id={props.id} />
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default ProgressComponent;
