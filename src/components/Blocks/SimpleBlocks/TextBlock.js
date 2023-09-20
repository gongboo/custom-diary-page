import React, { useState } from "react";

import { useFocus } from "../AdjustmentBar/hooks/adjustmentHooks";
import DiaryComponent from "../BlockWrapper";
import AdjustmentBar from "../AdjustmentBar/AdjustmentBar";
import { useSelector } from "react-redux";

import AdjustButton from "../AdjustmentBar/AdjustButton";
import AdjustInput from "../AdjustmentBar/AdjustInput";
import {
  incHeight,
  decHeight,
  incColor,
  decColor,
  deleteBlock,
  changeFont,
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";

const TextComponent = (props) => {
  // const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  const [font2, setFont2] = useState("Rock Salt");

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
            font: thisBlock.height + "px 'Noto Serif KR', sans-serif",
            backgroundColor: "rgba(255, 255, 255, 0)",
            color: color,
            fontFamily: font2,
          }}
        />
      </div>{" "}
      {isFocused && (
        <AdjustmentBar>
          {/* <AdjustInput action={changeFont} label="font" id={props.id} /> */}
          <AdjustButton action={incHeight} label="+" id={props.id} />
          높이
          <AdjustButton action={decHeight} label="-" id={props.id} />
          <AdjustButton action={incColor} label="+" id={props.id} />
          색깔
          <AdjustButton action={decColor} label="-" id={props.id} />
          <AdjustButton action={deleteBlock} label="x" id={props.id} />
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default TextComponent;
