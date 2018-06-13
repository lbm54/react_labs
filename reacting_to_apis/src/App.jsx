import React, { Component } from 'react';
import CardList from './components/CardList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then((obj) => {
            this.setState({
                films: obj
            });
        });
    }

    render() {
        return (
            <CardList cardArray={this.state.films} />
        )
    }
}

export default App;