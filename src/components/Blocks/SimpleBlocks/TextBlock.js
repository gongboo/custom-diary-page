import React, { useState } from "react";
import { ItemTypes } from "../../Constants/itemTypes";
import { useDrag } from "react-dnd";
import { useDraggable } from "../hooks/useDraggable";
import {
  useNumAttributeAdjuster,
  useFocus,
} from "../AdjustmentBar/hooks/adjustmentHooks";
import DiaryComponent from "../BlockWrapper";
import AdjustmentBar from "../AdjustmentBar/AdjustmentBar";
import { useSelector } from "react-redux";

import AdjustButton from "../AdjustmentBar/AdjustButton";
import {
  incHeight,
  decHeight,
  incColor,
  decColor,
  deleteBlock,
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";
import styles from "../styles/Block.module.css";

const TextComponent = (props) => {
  // const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();

  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );

  const color = getColor(thisBlock.color);

  return (
    <DiaryComponent
      // drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      <div
        // className={styles.block}
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
            font: thisBlock.height + "px 'Fira Sans', sans-serif",
            backgroundColor: "rgba(255, 255, 255, 0)",
            color: color,
          }}
        />
      </div>{" "}
      {isFocused && (
        <AdjustmentBar>
          <AdjustButton action={incHeight} label="+" id={props.id} />
          높이
          <AdjustButton action={decHeight} label="-" id={props.id} />
          <AdjustButton action={incColor} label="+" id={props.id} />
          색깔
          <AdjustButton action={decColor} label="-" id={props.id} />
          <AdjustButton
            action={deleteBlock}
            label="x"
            id={props.id}
            // styles={{
            //   backgroundColor: "red",
            // }}
          />
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default TextComponent;
