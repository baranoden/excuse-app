import React, { useState } from "react";
import { FirstExcuseList } from "../../data/FirstExcuseList";
import ExcuseListF from "./ExcuseListF";
import "./FirstBody.css";

function FirstBody() {
  const data = FirstExcuseList;
  return (
    <div className="intro-header">
      <label>Choose an Intro</label>
      <div>
        {data.map((excuse) => {
          return <ExcuseListF intro={excuse} />;
        })}
      </div>
    </div>
  );
}

export default FirstBody;
