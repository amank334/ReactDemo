import React from "react";
import ReactDOM from "react-dom";

class DemoComponent1 extends React.Component {
  render() {
    var a = 7;
    var b = 6;
    var c = 5;

    return <h1>{"(a+b)-c"}</h1>;
  }
}
export default DemoComponent1;
