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
        style={{ width: wWidth > 560 ? "80vw" : "100vw", float: "right" }}
      >
        <embed src="https://docdro.id/ZcbVvKd" width="100%" height="1000px" /> 
      </div>
    </SBLayout>
  );
}
