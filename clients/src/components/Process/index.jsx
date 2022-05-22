import React from "react";
import ProcessCheck from "../ProcessCheck";

import "./Process.scss";

const Process = () => {
  return (
    <div className="process">
      <div className="process__container">
        <div className="single__process">
          <div className="process__icons">
            <ProcessCheck value="none" className="process__svg" />
            <hr />
          </div>
          <span>Fees</span>
        </div>
        <div className="single__process">
          <div className="process__icons">
            <ProcessCheck value="2" className="process__svg" />
            <hr />
          </div>
          <span>COA</span>
        </div>
        <div className="single__process">
          <div className="process__icons">
            <ProcessCheck value="3" className="process__svg" />
            <hr />
          </div>
          <span>Visa Process</span>
        </div>
        <div className="single__process">
          <div className="process__icons">
            <ProcessCheck value="4" className="process__svg" />
          </div>
          <span>Visa decision</span>
        </div>
      </div>
    </div>
  );
};

export default Process;
