import React, { Component } from "react";
import Child from "./Child";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["Shea", "Spencer", "Tim"],
      input: ""
    };
  }

  inputChange(event) {
    this.setState({ input: event.target.value });
  }

  submitName() {
    let names = this.state.names.slice();
    names.push(this.state.input);
    this.setState({ names: names });
  }

  render() {
    let names = this.state.names.map((name, i) => <div key={i}> {name} </div>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <input placeholder="New Person" onChange={e => this.inputChange(e)} />
          <button onClick={() => this.submitName()}>Submit</button>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code> and save to reload.
        </p>
        <div>{names}</div>
        <Child />
      </div>
    );
  }
}

export default App;
export const nums = 7;
