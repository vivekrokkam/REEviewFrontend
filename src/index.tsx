import * as React from "react";
import { render } from "react-dom";
import Header from "./Components/Header";

import "react-bootstrap";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
