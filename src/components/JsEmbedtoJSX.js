import React, { PureComponent } from "react";

export default class JsEmbedtoJSX extends PureComponent {
  render() {
    const myName = "Mon";

    const isAnonymous = true;
    const username = "Ray";

    return (
      <div>
        <div>JsEmbedtoJSX</div>
        Javascript interpolation, allow with render return only support
        expressions only
        <div>My Name: {myName}</div>
        {1 + (1 * 3) / 2}
        <br />
        React wont render "false, null or undefined" values in curlies
        <br />
        user by: {isAnonymous ? "Anonymous User" : username}
      </div>
    );
  }
}
