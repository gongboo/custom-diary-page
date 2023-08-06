import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";

const ChecklistComponent = () => {
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
      style={{ flexDirection: "row" }}
    >
      <div
        style={{
          height: "20px",
          width: "20px",
          //backgroundColor: "black",
          border: "1px solid black",
        }}
      ></div>
      <div
        style={{
          height: "2px",
          width: "100%",
          backgroundColor: "black",
        }}
      ></div>
    </div>
  );
};

export default ChecklistComponent;
