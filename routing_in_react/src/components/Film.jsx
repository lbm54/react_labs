import React, { Component } from "react";
const URL_BASE = "https://ghibliapi.herokuapp.com";

class Film extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: "Loading"
    }
  }
  componentDidMount = () => {
    fetch(URL_BASE + "/films/" + this.props.match.params.id)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.film = JSON.stringify(response, null, "\t");
        this.setState({
          loading: "Loaded"
        })
      });
  }

  render() {
    if (this.state === "Loading") return <h1>Loading...</h1>;
    else return (
      <div className="row">
        <pre>{this.film}</pre>
      </div>
    );
  }
}

export default Film;
