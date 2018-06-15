import React, { Component } from "react";
import { Link } from "react-router-dom";

const URL_BASE = "https://ghibliapi.herokuapp.com";

class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: "Loading"
    };
  }

  componentDidMount = () => {
    fetch(URL_BASE + "/films")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.films = response.map(film => {
          let path = "/film/" + film.id;
          return (
            <li>
              <Link to={path} key={film.id}>
                {film.title}
              </Link>
            </li>
          );
        });
        this.setState({loading: "Loaded"});
      });
  };

  render() {
    if (this.state.loading === "Loading") return <h1>Loading....</h1>;
    else
      return (
        <div>
          <h1>Films</h1>
          <ul className="m-1">{this.films}</ul>
        </div>
      );
  }
}

export default Films;
