import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";

const ChecklistComponent = () => {
  const { isDragging, drag } = useDraggable();

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
