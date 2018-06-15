import React, { Component } from "react";
import { Link } from "react-router-dom";

const URL_BASE = "https://ghibliapi.herokuapp.com";

class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: "Loading"
    };
  }
  componentDidMount() {
    fetch(URL_BASE + "/people")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.people = response.map(person => {
          let path = "/person/" + person.id;
          return (
            <li>
              <Link to={path} key={person.id}>
                {person.name}
              </Link>
            </li>
          );
        });
        this.setState({ loading: "Loaded" });
      });
  }

  render() {
    if (this.state.loading === "Loading") return <h1>Loading....</h1>;
    else return <ul className="m-1">{this.people}</ul>;
  }
}

export default People;
