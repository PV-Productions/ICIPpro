import React from "react";
import Link from "next/link";

export default function Committee() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });
  return (
    <div
      className="wrapperVEN"
      style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
    >
      <embed src="/ICInPro Committee.pdf" className="pdf" />
      <style jsx>
        {`
          .wrapperVEN {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            height: 100vh;
            overflow-y: hidden;
          }
          .headerCALL {
            width: 100%;
            background-color: lightgray;
            color: white;
            box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.6);
            text-align: center;
          }
          .pdf {
            margin-top: 80px;
            width: 100%;
            height: 100vh;
          }
        `}
      </style>
    </div>
  );
}
