import React, { Component } from "react";
class DescSection extends Component {
  state = {};
  render() {
    return <h6 className="text-center w-100 mt-1">{this.props.text}</h6>;
  }
}

export default DescSection;
