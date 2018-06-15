import React, { Component } from 'react';
import { Link } from "react-router-dom";

const URL_BASE = "https://ghibliapi.herokuapp.com";

class Films extends Component {
    componentDidMount() {
        fetch(URL_BASE + "/films")
        .then(response => {
            return response.json()
        }).then(response => {
            this.films = response.map((film) => {
                let path = "/film/" + film.id;
                return <li><Link to={path} key={film.id}>{film.title}</Link></li>
            });
        });
    }

    render() {
        return (
            <ul className="m-1">{this.films}</ul>
        )
    }
}

export default Films;