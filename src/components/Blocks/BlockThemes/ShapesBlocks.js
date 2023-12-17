import React from "react";
import AdjustButton from "../AdjustmentBar/AdjustButton";
import { useFocus } from "../AdjustmentBar/hooks/adjustmentHooks";
import DiaryComponent from "../BlockWrapper";
import AdjustmentBar from "../AdjustmentBar/AdjustmentBar";
import { useSelector } from "react-redux";
import {
  incColor,
  decColor,
  deleteBlock,
  incRow,
  decRow,
  incCol,
  decCol,
  incHeight,
  decHeight,
  incStyleNum,
  decStyleNum,
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";
import styles from "../styles/Block.module.css";
import IncDecGroup from "../AdjustmentBar/IncDecGroup";
import StyleGroup from "../AdjustmentBar/StyleGroup";
const ShapesBlocks = (props) => {
  const [isFocused, setIsFocused, handleBlur] = useFocus();

  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );
  const color = getColor(thisBlock.color);

  const DoorStyle = () => {
    return (
      <svg
        width={thisBlock.height + "%"}
        height="auto"
        viewBox="0 0 206 249"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 0.5H106C160.952 0.5 205.5 45.0477 205.5 100V248.5H0.5V100C0.5 45.0477 45.0477 0.5 100 0.5Z"
          stroke={color}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    );
  };

  const ThreeCircleVerticalStyle = () => {
    return (
      <svg
        width={thisBlock.height + "%"}
        height="auto"
        viewBox="0 0 227 193"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.5 192.5C61.1311 192.5 72.5151 182.816 81 167.204C89.4849 182.816 100.869 192.5 113.5 192.5C126.131 192.5 137.515 182.816 146 167.204C154.485 182.816 165.869 192.5 178.5 192.5C191.91 192.5 203.913 181.586 212.535 164.251C221.172 146.886 226.5 122.932 226.5 96.5C226.5 70.068 221.172 46.1136 212.535 28.7486C203.913 11.4144 191.91 0.5 178.5 0.5C165.869 0.5 154.485 10.184 146 25.7957C137.515 10.184 126.131 0.5 113.5 0.5C100.869 0.5 89.4849 10.184 81 25.7957C72.5151 10.184 61.1311 0.5 48.5 0.5C35.0904 0.5 23.0865 11.4144 14.4647 28.7486C5.82774 46.1136 0.5 70.068 0.5 96.5C0.5 122.932 5.82774 146.886 14.4647 164.251C23.0865 181.586 35.0904 192.5 48.5 192.5Z"
          stroke={color}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    );
  };

  const ThreeDiamondVerticalStyle = () => {
    return (
      <svg
        width={thisBlock.height + "%"}
        height="auto"
        viewBox="0 0 274 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M69.9157 1.72218L69.5 1.10015L69.0843 1.72218L1.58429 102.722L1.39862 103L1.58429 103.278L69.0843 204.278L69.5 204.9L69.9157 204.278L103.25 154.4L136.584 204.278L137 204.9L137.416 204.278L170.75 154.4L204.084 204.278L204.5 204.9L204.916 204.278L272.416 103.278L272.601 103L272.416 102.722L204.916 1.72218L204.5 1.10015L204.084 1.72218L170.75 51.6002L137.416 1.72218L137 1.10015L136.584 1.72218L103.25 51.6002L69.9157 1.72218Z"
          stroke={color}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    );
  };

  const FiveCircleStyle = () => {
    return (
      <svg
        width={thisBlock.height + "%"}
        height="auto"
        viewBox="0 0 222 222"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51 101.5C54.6423 101.5 58.1946 101.114 61.6182 100.382C60.8856 103.805 60.5 107.358 60.5 111C60.5 114.642 60.8856 118.195 61.6182 121.618C58.1946 120.886 54.6423 120.5 51 120.5C23.1096 120.5 0.5 143.11 0.5 171C0.5 198.89 23.1096 221.5 51 221.5C78.8904 221.5 101.5 198.89 101.5 171C101.5 167.358 101.114 163.805 100.382 160.382C103.805 161.114 107.358 161.5 111 161.5C114.642 161.5 118.195 161.114 121.618 160.382C120.886 163.805 120.5 167.358 120.5 171C120.5 198.89 143.11 221.5 171 221.5C198.89 221.5 221.5 198.89 221.5 171C221.5 143.11 198.89 120.5 171 120.5C167.358 120.5 163.805 120.886 160.382 121.618C161.114 118.195 161.5 114.642 161.5 111C161.5 107.358 161.114 103.805 160.382 100.382C163.805 101.114 167.358 101.5 171 101.5C198.89 101.5 221.5 78.8904 221.5 51C221.5 23.1096 198.89 0.5 171 0.5C143.11 0.5 120.5 23.1096 120.5 51C120.5 54.6423 120.886 58.1946 121.618 61.6182C118.195 60.8856 114.642 60.5 111 60.5C107.358 60.5 103.805 60.8856 100.382 61.6182C101.114 58.1946 101.5 54.6423 101.5 51C101.5 23.1096 78.8904 0.5 51 0.5C23.1096 0.5 0.5 23.1096 0.5 51C0.5 78.8904 23.1096 101.5 51 101.5Z"
          stroke={color}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    );
  };
  const ThreeCircleHorizontalStyle = () => {
    return (
      <svg
        width={thisBlock.height + "%"}
        height="auto"
        viewBox="0 0 193 227"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M192.5 178.5C192.5 165.869 182.816 154.485 167.204 146C182.816 137.515 192.5 126.131 192.5 113.5C192.5 100.869 182.816 89.4849 167.204 81C182.816 72.5151 192.5 61.1311 192.5 48.5C192.5 35.0904 181.586 23.0865 164.251 14.4648C146.886 5.82774 122.932 0.5 96.5 0.5C70.068 0.5 46.1136 5.82774 28.7486 14.4648C11.4144 23.0865 0.5 35.0904 0.5 48.5C0.5 61.1311 10.184 72.5151 25.7957 81C10.184 89.4849 0.5 100.869 0.5 113.5C0.5 126.131 10.184 137.515 25.7957 146C10.184 154.485 0.5 165.869 0.5 178.5C0.5 191.91 11.4144 203.913 28.7486 212.535C46.1136 221.172 70.068 226.5 96.5 226.5C122.932 226.5 146.886 221.172 164.251 212.535C181.586 203.913 192.5 191.91 192.5 178.5Z"
          stroke={color}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    );
  };

  const TwoCircleHorizontalStyle = () => {
    return (
      <svg
        width={thisBlock.height + "%"}
        height="auto"
        viewBox="0 0 281 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M77 169.5C103.469 169.5 126.769 154.665 140.5 132.137C154.231 154.665 177.531 169.5 204 169.5C246.296 169.5 280.5 131.62 280.5 85C280.5 38.3802 246.296 0.5 204 0.5C177.531 0.5 154.231 15.335 140.5 37.8631C126.769 15.335 103.469 0.5 77 0.5C34.7043 0.5 0.5 38.3802 0.5 85C0.5 131.62 34.7043 169.5 77 169.5Z"
          stroke={color}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    );
  };

  const TwoCircleCrossStyle = () => {
    return (
      <svg
        width={thisBlock.height + "%"}
        height="auto"
        viewBox="0 0 242 242"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 120.5H0.5V121V241V241.5H1H121H121.5V241V181.5H181H181.5V181V121.5H241H241.5V121V1V0.5H241H121H120.5V1V60.5H61H60.5V61V120.5H1Z"
          stroke={color}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    );
  };

  const DiaSquareStyle = () => {
    return (
      <svg
        width={thisBlock.height + "%"}
        height="auto"
        viewBox="0 0 281 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M77 169.5C103.469 169.5 126.769 154.665 140.5 132.137C154.231 154.665 177.531 169.5 204 169.5C246.296 169.5 280.5 131.62 280.5 85C280.5 38.3802 246.296 0.5 204 0.5C177.531 0.5 154.231 15.335 140.5 37.8631C126.769 15.335 103.469 0.5 77 0.5C34.7043 0.5 0.5 38.3802 0.5 85C0.5 131.62 34.7043 169.5 77 169.5Z"
          stroke={color}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    );
  };
  const ThreeSquareStairStyle = () => {
    return (
      <svg
        width={thisBlock.height + "%"}
        height="auto"
        viewBox="0 0 242 242"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 120.5H0.5V121V241V241.5H1H121H121.5V241V181.5H181H181.5V181V121.5H241H241.5V121V1V0.5H241H121H120.5V1V60.5H61H60.5V61V120.5H1Z"
          stroke={color}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    );
  };
  const StarStyle = () => {
    return (
      <svg
        width={thisBlock.height + "%"}
        height="auto"
        viewBox="0 0 218 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M113.276 3.66259L135.461 71.3939C136.201 73.6537 138.31 75.1819 140.688 75.1819H212.393C216.761 75.1819 218.568 80.7786 215.024 83.3325L157.083 125.093C155.14 126.493 154.326 128.99 155.072 131.267L177.22 198.886C178.576 203.025 173.846 206.484 170.312 203.937L112.216 162.065C110.295 160.681 107.705 160.681 105.784 162.065L47.6878 203.937C44.154 206.484 39.4243 203.025 40.7802 198.886L62.9281 131.267C63.6737 128.99 62.8604 126.493 60.9172 125.093L2.9757 83.3325C-0.567858 80.7786 1.23882 75.1819 5.60682 75.1819H77.3121C79.69 75.1819 81.7987 73.6537 82.5388 71.3939L104.724 3.6626C106.077 -0.469793 111.923 -0.469796 113.276 3.66259Z"
          stroke={color}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    );
  };
  const FlagStyle = () => {
    return (
      <svg
        width={thisBlock.height + "%"}
        height="auto"
        viewBox="0 0 241 207"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 192.802V17.9379C0.59732 17.8678 0.729891 17.7735 0.897024 17.657C1.29623 17.3789 1.89258 16.9746 2.6767 16.4732C4.24502 15.4704 6.5641 14.0794 9.55904 12.5329C15.5495 9.4396 24.2401 5.72611 35.0325 3.25045C56.608 -1.69873 86.5991 -1.70592 120.246 18.1147C154.144 38.0829 184.403 38.0901 206.191 33.0921C217.081 30.5941 225.85 26.8472 231.9 23.7235C234.925 22.1615 237.271 20.7548 238.862 19.7371C239.552 19.2962 240.1 18.9283 240.5 18.6523V193.343C240.409 193.392 240.294 193.454 240.156 193.527C239.756 193.737 239.16 194.043 238.375 194.422C236.806 195.18 234.486 196.231 231.489 197.401C225.495 199.739 216.797 202.547 205.994 204.42C184.391 208.164 154.369 208.166 120.703 193.182C86.8242 178.103 56.5959 178.101 34.8353 181.873C23.9563 183.758 15.1937 186.587 9.1479 188.945C6.12483 190.125 3.78048 191.187 2.18983 191.956C1.46988 192.303 0.904289 192.591 0.5 192.802Z"
          stroke={color}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    );
  };
  const styleMap = {
    0: DoorStyle,
    1: ThreeCircleVerticalStyle,
    2: ThreeDiamondVerticalStyle,
    3: FiveCircleStyle,
    4: ThreeCircleHorizontalStyle,
    5: TwoCircleHorizontalStyle,
    6: TwoCircleCrossStyle,
    7: DiaSquareStyle,
    8: ThreeSquareStairStyle,
    9: StarStyle,
    10: FlagStyle,
  };
  const StylePart = styleMap[thisBlock.style];

  return (
    <DiaryComponent
      // drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StylePart />
      </div>

      {isFocused && (
        <AdjustmentBar>
          <StyleGroup
            inc={incStyleNum}
            dec={decStyleNum}
            label="스타일"
            id={props.id}
          />
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
          <IncDecGroup inc={incRow} dec={decRow} label="가로" id={props.id} />
          <IncDecGroup inc={incCol} dec={decCol} label="세로" id={props.id} />
          <AdjustButton action={deleteBlock} label="x" id={props.id} />
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};
export default ShapesBlocks;
