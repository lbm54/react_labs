import React, { Component } from 'react';
import { Link } from "react-router-dom";

const URL_BASE = "https://ghibliapi.herokuapp.com";

class People extends Component {
    componentDidMount() {
        fetch(URL_BASE + "/people")
        .then(response => {
            return response.json()
        }).then(response => {
            this.people = response.map((person) => {
                let path = "/person/" + person.id;
                return <li><Link to={path} key={person.id}>{person.name}</Link></li>
            });
        });
    }

    render() {
        return (
            <ul className="m-1">{this.people}</ul>           
        )
    }
}

export default People;