import React from "react";
import { useFocus } from "../AdjustmentBar/hooks/adjustmentHooks";
import DiaryComponent from "../BlockWrapper";
import AdjustmentBar from "../AdjustmentBar/AdjustmentBar";
import { useSelector } from "react-redux";
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
            height: thisBlock.height, // "calc(var(--pageHeight-size)*0.1*" + thisBlock.height + ")",
            boxSizing: "border-box",
            // width: "100%",
            border: "calc(var(--pageWidth-size)*0.004) solid " + color,
            borderRadius: thisBlock.isRound && "10px",
            //transition: "all ease 0.5s 0s",
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
            <AdjustButton action={deleteBlock} label="x" id={props.id} />
          </AdjustmentBar>
        )}
      </DiaryComponent>
    </div>
  );
};

export default BoxComponent;