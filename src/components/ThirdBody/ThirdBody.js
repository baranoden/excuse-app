import React, { useState } from "react";
import { ThirdExcuseList } from "../../data/ThirdExcuseList";

import ExcuseListT from "./ExcuseListT";

function ThirdBody() {
  const [showDelay, setShowDelay] = useState(true);
  if (!showDelay) return <div>you made it !</div>;
  const data = ThirdExcuseList;
  return (
    <div>
      <label>choose a delay</label>
      <div onClick={() => setShowDelay(false)}>
        {data.map((excuse) => {
          return <ExcuseListT delay={excuse} />;
        })}
      </div>
    </div>
  );
}

export default ThirdBody;
