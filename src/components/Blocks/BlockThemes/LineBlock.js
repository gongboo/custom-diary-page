import React from "react";

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
import styles from "../styles/Block.module.css";
import IncDecGroup from "../AdjustmentBar/IncDecGroup";

const LineComponent = (props) => {
  const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );

  const color = getColor(thisBlock.color);

  return (
    <DiaryComponent
      drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      <div
        style={{
          height: thisBlock.height + "px",
          width: "100%",
          backgroundColor: color,
          margin: "3px 0px 3px 0px",
        }}
      ></div>
      {isFocused && (
        <AdjustmentBar onDelete={props.onDelete} id={props.id}>
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

export default LineComponent;
