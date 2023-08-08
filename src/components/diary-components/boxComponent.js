import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";

const BoxComponent = () => {
  const { isDragging, drag } = useDraggable();

  const [height, setHeight] = useState(20);
  const [colorLightness, setColorLightness] = useState(50);
  const [colorLineThickness, setColorLineThickness] = useState(50);

  const [isFocused, setIsFocused] = useState(false);

  const increaseHeight = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setHeight((height) => height + 20);
  };

  const decreaseHeight = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setHeight((height) => height - 20);
  };

  const increaseColorLightness = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setColorLightness((colorLightness) => colorLightness + 20);
  };

  const decreaseColorLightness = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setColorLightness((colorLightness) => colorLightness - 20);
  };

  const handleBlur = () => {
    // setTimeout을 사용하여 onBlur 이벤트 처리를 약간 지연시킵니다.
    setTimeout(() => {
      setIsFocused(false);
    }, 0);
  };

  return (
    <div>
      <div style={{ height: "3px" }}></div>
      <div
        ref={drag}
        tabIndex="0"
        className={styles.diaryComponents}
        onFocus={() => setIsFocused(true)}
        onBlur={() => handleBlur()}
      >
        <div
          style={{
            position: "relative",
            height: height,
            width: "100%",
            border: "solid hsl(0,0%," + colorLightness + "%)",

            boxSizing: "border-box",
          }}
        >
          {isFocused && (
            <div
              style={{
                position: "absolute",
                top: "-25px",
                height: "20px",
                backgroundColor: "red",
              }}
            >
              <button onMouseDown={increaseHeight}>+</button>
              높이
              <button onMouseDown={decreaseHeight}>-</button>
              <button onMouseDown={increaseColorLightness}>+</button>
              색깔
              <button onMouseDown={decreaseColorLightness}>-</button>
              {/* <button onMouseDown={}>+</button>
              굵기
              <button onMouseDown={}>-</button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoxComponent;
