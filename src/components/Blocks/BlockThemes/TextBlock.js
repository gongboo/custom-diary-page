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
import IncDecGroup from "../AdjustmentBar/IncDecGroup";

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
          <IncDecGroup
            inc={incHeight}
            dec={decHeight}
            label="높이"
            id={props.id}
          />
          <IncDecGroup
            inc={incColor}
            dec={decColor}
            label="색깔"
            id={props.id}
          />
          {/* <AdjustInput action={changeFont} label="font" id={props.id} /> */}
          <AdjustButton action={deleteBlock} label="x" id={props.id} />
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default TextComponent;
