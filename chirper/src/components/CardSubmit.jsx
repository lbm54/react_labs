import React, { Component } from "react";
import CardList from "./CardList";

class CardSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirps: [
        {
          name: "Lee",
          handle: "leemartin",
          body: "Chirp 1 Body"
        },
        {
          name: "Lynne",
          handle: "lynnemartin",
          body: "Chirp 2 Body"
        },
        {
          name: "Roy",
          handle: "roymartin",
          body: "Chirp 3 Body"
        }
      ]
    };

    this.handleClick = (event) => {
        let newChirp = {
            name: document.getElementById("inputNameField").value,
            handle: document.getElementById("inputHandleField").value,
            body: document.getElementById("inputBodyField").value
        }
        this.setState({
            chirps: this.state.chirps.concat([newChirp])
        })
    };
  }

  render() {
    return (
      <React.Fragment>
        <CardList cardArray={this.state.chirps} />

        <div className="cardSubmitForm">
          <div className="row">
            <div className="col-lg-3">
              <label htmlFor="inputNameField">Name:</label>
              <input type="text" id="inputNameField" placeholder="Name" />
            </div>
            <div className="col-lg-3">
              <label htmlFor="inputHandleField">Handle:</label>
              <input type="text" id="inputHandleField" placeholder="Handle" />
            </div>
            <div className="col-lg-3">
              <label htmlFor="inputBodyField">Body:</label>
              <input type="text" id="inputBodyField" placeholder="Body" />
            </div>
            <div className="col-lg-3">
              <button
                name="cardSubmitButton"
                onClick={event => this.handleClick(event)}
              >
                Chirp
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardSubmit;
