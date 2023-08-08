import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";

const DoubleCircularDailyComponent = () => {
  const { isDragging, drag } = useDraggable();
  const [circleWidth, setCircleWidth] = useState(200);

  const scaleMark = () => {
    const numberOfItems = 12;
    const items = [];

    for (let i = 0; i < numberOfItems; i++) {
      items.push(
        <div
          style={{
            position: "absolute",
            width: "10px",
            height: "1px",
            backgroundColor: "black",
            bottom: "50%",
            left: "50%",
            transform:
              "translate(-50%, -50%) rotate(" +
              30 * i +
              "deg) translate(" +
              circleWidth / 2 +
              "px, 0) ",
          }}
        ></div>
      );
    }
    return <div>{items}</div>;
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
      <div
        style={{
          position: "relative",
          height: circleWidth,
          width: circleWidth,
          borderRadius: "50%",
          border: "solid",
          display: "inline-block",
        }}
      >
        {scaleMark()}
        <div
          style={{
            position: "absolute",
            height: "1px",
            width: "1px",
            bottom: "50%",
            left: "50%",
            borderRadius: "50%",
            border: "solid",
            backgroundColor: "black",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>
      <div
        style={{
          position: "relative",
          height: circleWidth,
          width: circleWidth,
          borderRadius: "50%",
          border: "solid",
          display: "inline-block",
        }}
      >
        {scaleMark()}
        <div
          style={{
            position: "absolute",
            height: "1px",
            width: "1px",
            bottom: "50%",
            left: "50%",
            borderRadius: "50%",
            border: "solid",
            backgroundColor: "black",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default DoubleCircularDailyComponent;
