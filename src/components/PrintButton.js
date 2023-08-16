import React from "react";
import { useReactToPrint } from "react-to-print";

const PrintButton = ({ contentRef }) => {
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });

  return (
    <button
      onClick={handlePrint}
      style={{
        margin: "10px",
        width: "fit-content",
        padding: "10px 20px",
        borderRadius: "30% 0%",
        alignSelf: "center",
        justifySelf: "center",
        fontFamily: '"Noto Serif KR", serif',
        fontSize: "2em",
        backgroundColor: "var(--main-color)",
        // border: "soild var(--diaryPage-color)",
        borderStyle: "solid",
        borderColor: "var(--diaryPage-color)",
        color: "var(--diaryPage-color)",
        borderWidth: "1px",
      }}
    >
      Print
    </button>
  );
};

export default PrintButton;
