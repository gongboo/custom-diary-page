import React, { useState } from "react";

const SiteLogo = () => {
  return (
    <a
      href="/"
      style={{
        textDecoration: "none",
      }}
    >
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
            border: "solid 1px var(--diaryPage-color)",
            position: "absolute",
            width: "400px",
            height: "50px",
            borderRadius: "80%",
          }}
        ></div>
      </div>
    </a>
  );
};

export default SiteLogo;
