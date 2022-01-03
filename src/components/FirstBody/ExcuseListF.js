import React, { useState } from "react";
import SecondBody from "../SecondBody/SecondBody";

import "./ExcuseListF.css";

function ExcuseListF({ intro }) {
  const [showIntro, setShowIntro] = useState(true);

  if (!showIntro)
    return (
      <div>
        <SecondBody />
      </div>
    );
  return (
    <div
      className="intro-holder"
      onClick={() => {
        setShowIntro(false);
      }}
    >
      <button>{intro.excuse}</button>
    </div>
  );
}
export default ExcuseListF;
