import React, { Component } from "react";
const URL_BASE = "https://ghibliapi.herokuapp.com";

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: "Loading"
    };
  }
  componentDidMount = () => {
    fetch(URL_BASE + "/people/" + this.props.match.params.id)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.person = JSON.stringify(response, null, "\t");
        this.setState({
          loading: "Loaded"
        });
      });
  };

  render() {
    if (this.state === "Loading") return <h1>Loading...</h1>;
    else
      return (
        <div className="row">
          <pre>{this.person}</pre>
        </div>
      );
  }
}

export default Person;
