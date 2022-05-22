import React from "react";

import "./Stage.scss";

const Stage = () => {
  return (
    <div className="stage">
      <div className="stage__container">
        <div className="steps">
          <div className="step">
            <div className="step__image">
              <p>1</p>
            </div>
            <div className="step__texts">
              <h4>Step 1</h4>
              <p>Fees paid</p>
            </div>
          </div>
          <hr />
          <div className="step">
            <div className="step__image">
              <p>2</p>
            </div>
            <div className="step__texts">
              <h4>Step 2</h4>
              <p>Issue COA</p>
            </div>
          </div>
        </div>
        <div className="loading"></div>
      </div>
      <div className="stage__container"></div>
      <div className="stage__container"></div>
      <div className="stage__container"></div>
    </div>
  );
};

export default Stage;
