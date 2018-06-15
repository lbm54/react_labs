import React, {Component} from 'react';
const URL_BASE = "https://ghibliapi.herokuapp.com";

class Person extends Component {
    componentDidMount() {
        fetch(URL_BASE + "/people/" + this.props.match.params.id)
        .then(response => {
            return response.json()
        }).then(response => {
            this.person = JSON.stringify(response, null, '\t');
        });
    }

    render() {
        return(
            <pre>{this.person}</pre>
     );
    }
}

export default Person;