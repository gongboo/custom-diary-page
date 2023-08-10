import React from "react";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";
import { useDraggable } from "./useDraggable";
import { useNumAttributeAdjuster, useFocus } from "./adjustmentHooks";

const DiaryComponent = ({ children, ...props }) => {
  return (
    <div
      ref={props.drag}
      tabIndex="0"
      className={styles.diaryComponents}
      onFocus={() => props.setIsFocused(true)}
      onBlur={() => props.handleBlur()}
      style={{ position: "relative" }}
    >
      {children}
    </div>
  );
};

export default DiaryComponent;
