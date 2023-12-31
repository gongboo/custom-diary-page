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
import IncDecGroup from "../AdjustmentBar/IncDecGroup";

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
            // width: "100%",
            border: "1px solid " + color,
            borderRadius: thisBlock.isRound && "10px",
            //transition: "all ease 0.5s 0s",
          }}
        ></div>
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
            <AdjustButton action={deleteBlock} label="x" id={props.id} />
          </AdjustmentBar>
        )}
      </DiaryComponent>
    </div>
  );
};

export default BoxComponent;
