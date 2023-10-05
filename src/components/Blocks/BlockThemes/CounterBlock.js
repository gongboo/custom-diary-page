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
  incStyleNum,
  decStyleNum,
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";
import IncDecGroup from "../AdjustmentBar/IncDecGroup";
import StyleGroup from "../AdjustmentBar/StyleGroup";

const CounterComponent = (props) => {
  const [isFocused, setIsFocused, handleBlur] = useFocus();

  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );
  const color = getColor(thisBlock.color);

  const SquareStyle = (props) => {
    return (
      <div
        style={{
          border: "solid 1px " + color,
          width: "8%",
          aspectRatio: "1 / 1",
          color: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.num}
      </div>
    );
  };
  const CircleStyle = (props) => {
    return (
      <div
        style={{
          border: "solid 1px " + color,
          width: "8%",
          aspectRatio: "1 / 1",
          color: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100%",
        }}
      >
        {props.num}
      </div>
    );
  };
  const RoundSquareStyle = (props) => {
    return (
      <div
        style={{
          border: "solid 1px " + color,
          width: "8%",
          aspectRatio: "1 / 1",
          color: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10%",
        }}
      >
        {props.num}
      </div>
    );
  };

  const styleMap = {
    0: SquareStyle,
    1: CircleStyle,
    2: RoundSquareStyle,
  };

  const oneParticle = (num) => {
    const Pariticle = styleMap[thisBlock.style];
    return <Pariticle num={num} />;
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
          <StyleGroup
            inc={incStyleNum}
            dec={decStyleNum}
            label="스타일"
            id={props.id}
          />
          <IncDecGroup
            inc={incCounter}
            dec={decCounter}
            label="갯수"
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

export default CounterComponent;
