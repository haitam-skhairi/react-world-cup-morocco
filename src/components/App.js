import React, { Component } from "react";
import Head from "./Head";
import Text from "./Text";
import Team from "./Team";

class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <div className="container">
          <Text />
          <Team />
        </div>
      </div>
    );
  }
}

export default App;
