import React from "react";
const ChirpSubmit = props => {
  return (
    <div className="bg-light border border-dark p-5" style={{height: 200}}>
      <div className="row">
        <label htmlFor="inputNameField">Name:</label>
        <input type="text" id="inputNameField" placeholder="Name" />
      </div>
      <div className="row">
        <label htmlFor="inputHandleField">Handle:</label>
        <input type="text" id="inputHandleField" placeholder="Handle" />
      </div>
      <div className="row">
        <label htmlFor="inputBodyField">Body:</label>
        <input type="text" id="inputBodyField" placeholder="Body" />
      </div>
      <div className="row">
        <button
          name="cardSubmitButton"
          onClick={event => props.handleClick(event)}
        >
          Chirp
        </button>
      </div>
    </div>
  );
};

export default ChirpSubmit;
