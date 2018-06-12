import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    // this.propMyChoosing = props.propMyChoosing;

    this.handleChange = function(inputFieldValue) {
      this.setState({
        inputFieldProperty: inputFieldValue
      });
    };

    this.handleToggle = () => {
      this.setState({
        hasLoaded: !this.state.hasLoaded
      });
    };

    this.state = {
      text: "hey",
      inputFieldProperty: "",
      hasLoaded: false
    };

    this.componentDidMount = () => {
      this.state.hasLoaded = true;
    };
  }

  render() {
    this.componentDidMount();
    if (this.state.hasLoaded) {
      return (
        <React.Fragment>
          <h1>
            {this.propMyChoosing} {this.state.text}
          </h1>
          <input
            placeholder={this.state.placeholder}
            onChange={event => {
              this.handleChange(event.target.value);
            }}
          />
          <button onClick={this.handleToggle}>Toggle Has Loaded</button>
        </React.Fragment>
      );
    } else
      return (
        <React.Fragment>
          <h1>Loading...</h1>
          <button onClick={this.handleToggle}>Toggle Has Loaded</button>
        </React.Fragment>
      );
  }
}

export default App;
