import React from "react";
import SBLayout from "../../components/SBLayout";

export default function venue() {
  const [wWidth, setwWidth] = React.useState(0);
  React.useEffect(() => {
    setwWidth(window.innerWidth);
  });

  return (
    <SBLayout>
      <div
        className="wrapperVEN"
        style={{ width: wWidth > 560 ? "100vw" : "100vw", float: "right" }}
      >
        <h1
          className="headerCALL"
          style={{ fontSize: wWidth > 560 ? "72px" : "48px" }}
        >
          To Be updated
        </h1>

        <style jsx>
          {`
            .wrapperVEN {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              height: 100vh;
            }
            .headerCALL {
              width: 100%;
              background-color: #800000;
              color: white;
              box-shadow: 2px 2px 10px 5px rgba(220, 220, 220, 0.6);
              text-align: center;
            }
          `}
        </style>
      </div>
    </SBLayout>
  );
}
