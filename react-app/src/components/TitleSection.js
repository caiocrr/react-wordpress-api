import React, { Component } from "react";
class TitleSection extends Component {
  state = {};
  render() {
    return <h1 className="text-center w-100 mt-2">{this.props.text}</h1>;
  }
}

export default TitleSection;
