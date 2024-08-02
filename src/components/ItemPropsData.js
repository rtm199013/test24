import React, { PureComponent } from "react";

import ItemPropsChild from "./ItemPropsChild";

export default class ItemPropsData extends PureComponent {
  render() {
    const dataprop = "sample props text here";

    return (
      <div>
        Props pass DOWN
        <ItemPropsChild newprops={dataprop} />
      </div>
    );
  }
}
