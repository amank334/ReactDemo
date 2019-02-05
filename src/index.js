import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/RouterDemo2";
import Login from "./Components/RouterDemo3";
import "./styles.css";

//function App() {
//  return (
//   <div className="App">
//     var a=7; var b=6; var c=5; return <h1>{"(a+b)-c"}</h1>
//   </div>
// );
//}

const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
