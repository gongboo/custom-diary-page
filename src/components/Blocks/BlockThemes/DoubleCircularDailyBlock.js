import React from "react";

import { useFocus } from "../AdjustmentBar/hooks/adjustmentHooks";
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
import IncDecGroup from "../AdjustmentBar/IncDecGroup";

const DoubleCircularDailyComponent = (props) => {
  const [isFocused, setIsFocused, handleBlur] = useFocus();

  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );
  const color = getColor(thisBlock.color);

  const scaleMark = () => {
    const numberOfItems = 12;
    const items = [];

    for (let i = 0; i < numberOfItems; i++) {
      items.push(
        <div
          style={{
            position: "absolute",
            width: "10px",
            height: "1px",
            backgroundColor: color,
            bottom: "50%",
            left: "50%",
            transform:
              "translate(-50%, -50%) rotate(" +
              30 * i +
              "deg) translate(" +
              thisBlock.height / 2 +
              "px, 0) ",
          }}
        ></div>
      );
    }
    return <div>{items}</div>;
  };
  return (
    <DiaryComponent
      // drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            position: "relative",
            height: thisBlock.height,
            width: thisBlock.height,
            borderRadius: "50%",
            border: "1px solid " + color,
            boxSizing: "border-box",
          }}
        >
          {scaleMark()}
          <div
            style={{
              position: "absolute",
              height: "2px",
              width: "2px",
              bottom: "50%",
              left: "50%",
              borderRadius: "50%",
              // border: "solid " + color,
              backgroundColor: color,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "relative",
            height: thisBlock.height,
            width: thisBlock.height,
            borderRadius: "50%",
            border: "1px solid " + color,
            display: "inline-block",
          }}
        >
          {scaleMark()}
          <div
            style={{
              position: "absolute",
              height: "2px",
              width: "2px",
              bottom: "50%",
              left: "50%",
              borderRadius: "50%",
              // border: "solid " + color,
              backgroundColor: color,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      </div>{" "}
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
          <AdjustButton action={deleteBlock} label="x" id={props.id} />
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default DoubleCircularDailyComponent;
