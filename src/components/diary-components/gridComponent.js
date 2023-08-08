import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";

const GridComponent = () => {
  const { isDragging, drag } = useDraggable();

  return (
    <div
      ref={drag}
      tabIndex="0"
      className={styles.diaryComponents}
      style={{
        display: "inline-block",
        width: "100%",
        height: "200px",
        backgroundImage:
          "linear-gradient(#eee 1px, transparent 1px), linear-gradient(90deg, #eee 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    ></div>
  );
};

export default GridComponent;
