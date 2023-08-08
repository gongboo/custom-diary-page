import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";

const CounterComponent = () => {
  const { isDragging, drag } = useDraggable();

  const [number, setNumber] = useState(20);
  const oneParticle = (num) => {
    return (
      <div
        style={{
          border: "solid",
          //float: "left",
          padding: "5px",

          width: "20px",
        }}
      >
        {num}
      </div>
    );
  };

  return (
    <div
      ref={drag}
      tabIndex="0"
      className={styles.diaryComponents}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center", //"space-between", //"center",
      }}
    >
      {Array.from({ length: number }).map((_, i) => oneParticle(i + 1))}
    </div>
  );
};

export default CounterComponent;
