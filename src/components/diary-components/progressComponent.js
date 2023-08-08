import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";

const ProgressComponent = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD, //추후 수정
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      tabIndex="0"
      className={styles.diaryComponents}
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
  );
};

export default ProgressComponent;
