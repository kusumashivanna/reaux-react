import React, { Component } from "react";
import UserConatiner from "./container/UserContainer";

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <UserConatiner />
      </div>
    );
  }
}
