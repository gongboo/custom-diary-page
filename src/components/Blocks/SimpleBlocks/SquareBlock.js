import React, { useState } from "react";
import { ItemTypes } from "../../Constants/itemTypes";
import { useDrag } from "react-dnd";
import { useDraggable } from "../hooks/useDraggable";
import { useFocus } from "../AdjustmentBar/hooks/adjustmentHooks";
import DiaryComponent from "../BlockWrapper";
import AdjustmentBar from "../AdjustmentBar/AdjustmentBar";
import { useSelector, useDispatch } from "react-redux";
import {
  incHeight,
  decHeight,
  incColor,
  decColor,
  changeIsRound,
  deleteBlock,
} from "../../../ReduxFiles/actions";
import AdjustButton from "../AdjustmentBar/AdjustButton";
import { getColor } from "../common";

const BoxComponent = (props) => {
  // const { isDragging, drag } = useDraggable();

  const [isFocused, setIsFocused, handleBlur] = useFocus();

  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );
  const color = getColor(thisBlock.color);

  return (
    <div>
      <DiaryComponent
        // drag={drag}
        setIsFocused={setIsFocused}
        handleBlur={handleBlur}
      >
        <div
          style={{
            height: thisBlock.height,
            boxSizing: "border-box",
            width: "100%",
            border: "solid " + color,
            borderRadius: thisBlock.isRound && "10px",
          }}
        ></div>
        {isFocused && (
          <AdjustmentBar>
            <AdjustButton action={incHeight} label="+" id={props.id} />
            높이
            <AdjustButton action={decHeight} label="-" id={props.id} />
            <AdjustButton action={incColor} label="+" id={props.id} />
            색깔
            <AdjustButton action={decColor} label="-" id={props.id} />
            {/* <AdjustButton
              action={changeIsRound}
              label="모서리 둥글게"
              id={props.id}
              styles={{ backgroundColor: thisBlock.isRound ? "red" : "blue" }}
            /> */}
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
    </div>
  );
};

export default BoxComponent;
