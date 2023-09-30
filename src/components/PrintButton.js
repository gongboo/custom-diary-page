import React from "react";
import { useReactToPrint } from "react-to-print";

const PrintButton = ({ contentRef }) => {
  const handlePrint = useReactToPrint({
    content: function () {
      const clonedNode = contentRef.current.cloneNode(true);
      // clonedNode.querySelector("img").style.width = "100%";
      // clonedNode.style.width = "100%";
      // clonedNode.style.margin = 0;
      // clonedNode.style.padding = 0;

      return clonedNode;
    },
  });

  return (
    <button
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
        borderStyle: "solid",
        borderColor: "var(--diaryPage-color)",
        color: "var(--diaryPage-color)",
        borderWidth: "1px",
      }}
      onClick={handlePrint}
    >
      Print
    </button>
  );
};

export default PrintButton;
