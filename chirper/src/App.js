import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList";
import ChirpSubmit from "./components/ChirpSubmit";

class App extends Component {
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

    this.handleClick = event => {
      let newChirp = {
        name: document.getElementById("inputNameField").value,
        handle: document.getElementById("inputHandleField").value,
        body: document.getElementById("inputBodyField").value
      };
      this.setState({
        chirps: this.state.chirps.concat([newChirp])
      });
    };
  }

  render() {
    return (
      <div className="container-fluid m-2">
        <div className="row">
          <CardList cardArray={this.state.chirps} />
          <ChirpSubmit handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
