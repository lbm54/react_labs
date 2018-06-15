import React, { Component } from "react";
const URL_BASE = "https://ghibliapi.herokuapp.com";

class Film extends Component {
  componentDidMount = () => {
    fetch(URL_BASE + "/films/" + this.props.match.params.id)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.film = JSON.stringify(response, null, "\t");
        console.log(this.film);
      });
  }

  render() {
    return (
      <div className="row">
        <pre>{this.film}</pre>
      </div>
    );
  }
}

export default Film;
