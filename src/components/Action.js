import React from 'react';

const Action = (props) => (
  <div>
    <button
      onClick={props.handlePick}
      disabled={!props.hasOptions}
      className="big-button"
    >
      Test your luck!
      </button>
  </div>
);

export default Action;
