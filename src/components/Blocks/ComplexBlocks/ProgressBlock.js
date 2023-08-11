import React, { useState } from "react";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";
import { useNumAttributeAdjuster, useFocus } from "../../hooks/adjustmentHooks";
import DiaryComponent from "./diaryComponent";
import AdjustmentBar from "./adjustmentBar/adjustmentBar";

const ProgressComponent = (props) => {
  const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  const [colorLineThickness, setColorLineThickness] = useState(50);

  const [height, increaseHeight, decreaseHeight] = useNumAttributeAdjuster();
  const [colorLightness, increaseColorLightness, decreaseColorLightness] =
    useNumAttributeAdjuster();
  const color = "hsl(0,0%," + colorLightness + "%)";

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
        <AdjustmentBar onDelete={props.onDelete}>
          <button onMouseDown={increaseHeight}>+</button>
          높이
          <button onMouseDown={decreaseHeight}>-</button>
          <button onMouseDown={increaseColorLightness}>+</button>
          색깔
          <button onMouseDown={decreaseColorLightness}>-</button>
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default ProgressComponent;