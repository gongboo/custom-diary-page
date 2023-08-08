import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";

const DotgridComponent = () => {
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
        backgroundImage: "radial-gradient(#000 1px, transparent 1px)", //,radial-gradient(#000 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    ></div>
  );
};

export default DotgridComponent;
