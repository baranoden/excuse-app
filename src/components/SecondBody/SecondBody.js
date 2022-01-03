import React, { useState } from "react";
import { SecondExcuseList } from "../../data/SecondExcuseList";
import ThirdBody from "../ThirdBody/ThirdBody";
import ExcuseListS from "./ExcuseListS";

function SecondBody() {
  const [showScapegoat, setShowScapegoat] = useState(true);
  if (!showScapegoat)
    return (
      <div>
        <ThirdBody />
      </div>
    );

  const data = SecondExcuseList;
  return (
    <div>
      <label>choose a scapegoat</label>
      <div
        onClick={() => {
          setShowScapegoat(false);
        }}
      >
        {data.map((excuse) => {
          return <ExcuseListS scapegoat={excuse} />;
        })}
      </div>
    </div>
  );
}

export default SecondBody;
