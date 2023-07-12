import React, { Component } from "react";
import "./App.css";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Hola {this.props.name}</h1>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      names: ["Juan", "Pedro", "Germán"],
    };
  }

  render() {
    return (
      <div>
        {this.state.names.map((name) => (
          <Welcome name={name} />
        ))}
      </div>
    );
  }
}

export default App;
