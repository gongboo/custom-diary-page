import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";

const BoxComponent = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD, //추후 수정
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} tabIndex="0" className={styles.diaryComponents}>
      <div
        style={{
          height: "20px",
          width: "100%",
          border: "solid",
          boxSizing: "border-box",
        }}
      ></div>
    </div>
  );
};

export default BoxComponent;
