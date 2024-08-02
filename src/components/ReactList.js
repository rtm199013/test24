import React, { PureComponent } from "react";

export default class ReactList extends PureComponent {
  render() {
    const items = ["rice", "chicken", "cookie"];

    return (
      <div>
        <div>ReactList: render arrays</div>
        Menu (items in array):
        <ol>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    );
  }
}
