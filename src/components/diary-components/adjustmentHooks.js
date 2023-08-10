import { useState } from "react";

export function useNumAttributeAdjuster(start = 20, stepSize = 10) {
  // 셀 수 있는 속성 정의 최대 최소 값있는게 좋겠다
  const [num, setNum] = useState(start);

  const increaseNum = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setNum((num) => num + stepSize);
  };

  const decreaseNum = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setNum((num) => num - stepSize);
  };
  return [num, increaseNum, decreaseNum];
}

export function useIsOrNot() {
  const [isSth, setIsSth] = useState(false);

  const changeIsSth = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsSth(!isSth);
  };

  return [isSth, changeIsSth];
}

export function useFocus() {
  const [isFocused, setIsFocused] = useState(false);
  const handleBlur = () => {
    // setTimeout을 사용하여 onBlur 이벤트 처리를 약간 지연
    setTimeout(() => {
      setIsFocused(false);
    }, 0);
  };
  return [isFocused, setIsFocused, handleBlur];
}
