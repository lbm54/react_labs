import React, { Component } from "react";
import CardList from "./components/CardList";
import "isomorphic-fetch";
import "es6-promise";

const FILMS_ENDPOINT = "https://ghibliapi.herokuapp.com/films";
const PEOPLE_ENDPOINT = "https://ghibliapi.herokuapp.com/people";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      type: ""
    };

    this.send = response => {
      response.json().then(obj => {
        this.setState({
          data: obj
        });
      });
    };

    this.loadPeople = () => {
        fetch(PEOPLE_ENDPOINT).then(response => this.send(response));
        this.setState({type: "people"});
    }
    this.loadFilms = () => {
        fetch(FILMS_ENDPOINT).then(response  => this.send(response));
        this.setState({type: "films"});
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <img
            className="m-auto"
            src="https://ghibliapi.herokuapp.com/images/logo.svg"
            alt=""
          />
        </div>
        <div className="row m-2">
          <button className="button" onClick={this.loadFilms}>
            Load Films
          </button>
          <button className="button" onClick={this.loadPeople}>
            Load People
          </button>
        </div>

        <CardList cardArray={this.state.data} type={this.state.type} />
      </React.Fragment>
    );
  }
}

export default App;
