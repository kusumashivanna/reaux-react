import React, { Component } from "react";
import UserContainer from "./container/UserContainer";

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <UserContainer />
      </div>
    );
  }
}