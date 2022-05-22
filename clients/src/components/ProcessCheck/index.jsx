import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

import "./ProcessCheck.scss";

const ProcessCheck = ({ value }) => {
  // console.log(value);
  return (
    <div className="process__check">
      <div className="process__check-container">
        {value === "none" ? (
          <i>
            <AiOutlineCheck />
          </i>
        ) : (
          <p>{value}</p>
        )}
      </div>
    </div>
  );
};

export default ProcessCheck;
