import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";

const MonthTableComponent = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD, //추후 수정
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const drawTable = (rowNum, colNum) => {
    const td_widgets = [];
    let i = 0;
    for (i = 0; i < colNum; i++) {
      td_widgets.push(<td style={{ border: "solid" }}></td>);
    }

    const total_widgets = [];

    for (i = 0; i < rowNum; i++) {
      total_widgets.push(
        <tr style={{ height: "20px", width: "100%" }}>{td_widgets}</tr>
      );
      total_widgets.push(
        <tr style={{ height: "70px", width: "100%" }}>{td_widgets}</tr>
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
    <div
      ref={drag}
      tabIndex="0"
      className={styles.diaryComponents}
      style={{
        width: "100%",
      }}
    >
      {drawTable(4, 5)}
    </div>
  );
};

export default MonthTableComponent;
