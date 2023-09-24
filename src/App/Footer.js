import React from "react";

const Footer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <a
        href="/updates"
        style={{
          // textDecoration: "none",
          color: "var(--diaryPage-color)",
        }}
      >
        <div
        // style={{
        //   border: "1px solid var(--diaryPage-color)",
        //   padding: "5px",
        // }}
        >
          updates
        </div>
      </a>
      <a
        href="/about"
        style={{
          // textDecoration: "none",
          color: "var(--diaryPage-color)",
        }}
      >
        <div
        // style={{
        //   border: "1px solid var(--diaryPage-color)",
        //   padding: "5px",
        // }}
        >
          about
        </div>
      </a>
    </div>
  );
};

export default Footer;
