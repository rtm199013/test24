import React, { PureComponent } from "react";

export default class ItemPropsChild extends PureComponent {
  render() {
    return <div>content: {this.props.newprops}</div>;
  }
}
