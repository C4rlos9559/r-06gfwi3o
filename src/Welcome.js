import React, { Component } from "react";
import "./App.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hola {this.props.name}</h1>;
      </div>
    );
  }
}

export default Welcome;
