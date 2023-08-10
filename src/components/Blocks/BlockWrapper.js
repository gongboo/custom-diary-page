import React from "react";
import { useDrag } from "react-dnd";
import styles from "./styles/Block.module.css";
import { useDraggable } from "./hooks/useDraggable";
// import { useNumAttributeAdjuster, useFocus } from "../../hooks/adjustmentHooks";

const BlockWrapper = ({ children, ...props }) => {
  return (
    <div
      ref={props.drag}
      tabIndex="0"
      className={styles.BlockWrapper}
      onFocus={() => props.setIsFocused(true)}
      onBlur={() => props.handleBlur()}
      style={{ position: "relative" }}
    >
      {children}
    </div>
  );
};

export default BlockWrapper;
