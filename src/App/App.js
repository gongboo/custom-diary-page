import "./App.css";
import React, { useState, useRef } from "react";
import PrintButton from "../components/PrintButton";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
import ComponentTab from "../components/BlockTab/BlockTab";
import ComponentToPrint from "../components/DiaryPage/DiaryPage";

import { useReactToPrint } from "react-to-print";

import { PiChatTextLight, PiClipboardTextLight } from "react-icons/pi";

function App() {
  const componentRef = useRef();
  const test = useRef();

  const [padding, setPadding] = useState(19);
  const [holeSpace, setHoleSpace] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const [printPageStyle, setPrintPageStyle] = useState("1x1");
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrl90, setImageUrl90] = useState(null);

  const changePad = (num) => {
    setPadding(num);
  };

  const changeHoleSpace = (num) => {
    setHoleSpace(num);
  };
  const [holeDirection, setHoleDirection] = useState("left");

  const changeHoleDirection = (event) => {
    setHoleDirection(event.target.value);
  };

  const setModalActive = () => {
    setIsModalActive(true);
  };
  const setModalInactive = () => {
    setIsModalActive(false);
  };

  function captureAndShowImage() {
    let node = document.getElementById("capture").cloneNode(true);

    // ---시도해 봤는데 안된 부분---
    // node.style.display = "none"; // 화면에서 안보이게 했는데 작동 안됨
    // node.style.position = "absolute"; //화면 밖으로 피해서 해봤는데 여전히 안됨
    // node.style.left = "-9999px";

    document.body.appendChild(node);
    node.querySelector(".diary_page").style.backgroundColor = "white";
    const scale = 4;
    domtoimage
      .toPng(node, {
        width: 500 * scale,
        height: 707 * scale,
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top left",
        },
        // width: 500,
        // height: 707,
      })
      .then((dataUrl) => {
        let img = new Image();
        img.style.width = "100%";
        img.src = dataUrl;
        setImageUrl(dataUrl);

        rotateImage(dataUrl, (rotatedDataUrl) => {
          setImageUrl90(rotatedDataUrl);
        });

        document.body.removeChild(node);
      })
      .catch((error) => {
        console.error("Error capturing image:", error);
      });
  }

  const rotateImage = (dataUrl, callback) => {
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.height;
      canvas.height = img.width;

      // 회전의 중심을 이미지의 중심으로 설정
      ctx.translate(img.height / 2, img.width / 2);
      ctx.rotate((90 * Math.PI) / 180);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);

      callback(canvas.toDataURL()); // 회전된 이미지의 Data URL을 반환
    };
  };

  return (
    <div
      className="App"
      style={{
        display: "grid",
        justifyContent: "center",
      }}
    >
      {/* <PiChatTextLight
        style={{
          position: "absolute",
          width: "20",
          height: "20",
          color: "white",
          right: 10,
        }}
      />
      <PiClipboardTextLight
        style={{
          position: "absolute",
          width: "20",
          height: "20",
          color: "white",
          right: 10,
          top: 30,
        }}
      /> */}
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          height: "fit-content",
        }}
      >
        <h1
          style={{
            justifySelf: "center",
            color: "var(--diaryPage-color)",
          }}
        >
          CUSTOM DIARY PAGE
        </h1>
        <div
          style={{
            alignSelf: "center",
            justifySelf: "center",
            border: "solid var(--diaryPage-color)",
            position: "absolute",
            width: "400px",
            height: "50px",
            borderRadius: "80%",
          }}
        ></div>
      </div>
      <ComponentTab
        changePad={changePad}
        pad={padding}
        holeSpace={holeSpace}
        changeHoleSpace={changeHoleSpace}
        holeDirection={holeDirection}
        changeHoleDirection={changeHoleDirection}
      />
      <div style={{ height: "10px" }} />
      <div id="capture">
        <ComponentToPrint
          ref={componentRef}
          pad={padding}
          holeSpace={holeSpace}
          holeDirection={holeDirection}
        />
      </div>
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
        onClick={() => {
          setModalActive();
          captureAndShowImage();
        }}
      >
        print
      </button>

      {isModalActive && (
        <div
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "var(--main-color)",
            zIndex: 2,
            position: "fixed",
            justifyContent: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "10px",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div id="sample" ref={test} style={{}}>
              {printPageStyle === "1x1" && (
                <img
                  src={imageUrl}
                  style={{ width: "100%", display: "block", margin: 0 }}
                  alt="Generated content"
                />
              )}
              {printPageStyle === "2x1" && (
                <div>
                  <img
                    src={imageUrl90}
                    style={{
                      width: "100%",
                      display: "block",
                      transformOrigin: "rotate(90deg)",
                      margin: 0,
                    }}
                    alt="Generated content"
                  />
                  <img
                    src={imageUrl90}
                    style={{
                      width: "100%",
                      display: "block",
                      transformOrigin: "rotate(90deg)",
                      margin: 0,
                    }}
                    alt="Generated content"
                  />
                </div>
              )}
              {printPageStyle === "2x2" && (
                <>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                  >
                    <img
                      src={imageUrl}
                      style={{ width: "100%", display: "block", margin: 0 }}
                      alt="Generated content"
                    />
                    <img
                      src={imageUrl}
                      style={{ width: "100%", display: "block", margin: 0 }}
                      alt="Generated content"
                    />
                    <img
                      src={imageUrl}
                      style={{ width: "100%", display: "block", margin: 0 }}
                      alt="Generated content"
                    />
                    <img
                      src={imageUrl}
                      style={{ width: "100%", display: "block", margin: 0 }}
                      alt="Generated content"
                    />
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => {
                setModalInactive();
              }}
              style={{
                position: "absolute",
                top: "5%",
                left: "90%",
                backgroundColor: "var(--main-color)",
                borderStyle: "none",
                color: "var(--diaryPage-color)",
              }}
            >
              X
            </button>

            <div style={{ display: "block" }}>
              <div>
                <input
                  type="radio"
                  id="1x1"
                  name="style"
                  value="1x1"
                  checked={printPageStyle === "1x1"}
                  onChange={(e) => setPrintPageStyle(e.target.value)}
                />
                <label for="1x1">1x1</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="2x1"
                  name="style"
                  value="2x1"
                  checked={printPageStyle === "2x1"}
                  onChange={(e) => setPrintPageStyle(e.target.value)}
                />
                <label for="2x1">2x1</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="2x2"
                  name="style"
                  value="2x2"
                  checked={printPageStyle === "2x2"}
                  onChange={(e) => setPrintPageStyle(e.target.value)}
                />
                <label for="2x2">2x2</label>
              </div>
              <ShowPrintSampleButton contentRef={test} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ShowPrintSampleButton = ({ contentRef }) => {
  const handlePrint = useReactToPrint({
    content: function () {
      const clonedNode = contentRef.current.cloneNode(true);
      clonedNode.querySelector("img").style.width = "100%";
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

export default App;
