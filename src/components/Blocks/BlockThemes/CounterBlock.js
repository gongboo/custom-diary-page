import React from "react";

import { useFocus } from "../AdjustmentBar/hooks/adjustmentHooks";
import DiaryComponent from "../BlockWrapper";
import AdjustmentBar from "../AdjustmentBar/AdjustmentBar";
import { useSelector } from "react-redux";
import AdjustButton from "../AdjustmentBar/AdjustButton";
import {
  incColor,
  decColor,
  incCounter,
  decCounter,
  deleteBlock,
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";

const CounterComponent = (props) => {
  const [isFocused, setIsFocused, handleBlur] = useFocus();

  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );
  const color = getColor(thisBlock.color);
  const oneParticle = (num) => {
    return (
      <div
        style={{
          border: "solid " + color,
          padding: "5px",
          width: "20px",
          height: "20px",
          color: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // borderRadius: "100%",
        }}
      >
        {num}
      </div>
    );
  };

  return (
    <DiaryComponent
      // drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: thisBlock.counter }).map((_, i) =>
          oneParticle(i + 1)
        )}
      </div>
      {isFocused && (
        <AdjustmentBar onDelete={props.onDelete} id={props.id}>
          <AdjustButton action={incCounter} label="+" id={props.id} />
          갯수
          <AdjustButton action={decCounter} label="-" id={props.id} />
          <AdjustButton action={incColor} label="+" id={props.id} />
          색깔
          <AdjustButton action={decColor} label="-" id={props.id} />
          <AdjustButton action={deleteBlock} label="x" id={props.id} />
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default CounterComponent;