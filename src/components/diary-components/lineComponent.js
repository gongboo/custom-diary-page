import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";

const LineComponent = () => {
  const { isDragging, drag } = useDraggable();

  return (
    <div
      ref={drag}
      tabIndex="0"
      className={styles.diaryComponents}
      style={{
        height: "2px",
        width: "100%",
        backgroundColor: "black",
      }}
    ></div>
  );
};

export default LineComponent;
