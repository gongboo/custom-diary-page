import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";

const TextComponent = () => {
  const { isDragging, drag } = useDraggable();

  return (
    <div
      ref={drag}
      tabIndex="0"
      className={styles.diaryComponents}
      style={{
        width: "100%",
      }}
    >
      <input
        type="text"
        placeholder="click and insert text"
        style={{
          border: "none",
          width: "100%",
          border: "none",
          outline: "none",
        }}
      />
    </div>
  );
};

export default TextComponent;
