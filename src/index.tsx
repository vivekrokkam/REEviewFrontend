import * as React from "react";
import { render } from "react-dom";
import Header from "./Components/Header";
import BlogList from "./Components/BlogList";
import "react-bootstrap";

import "./styles.css";

function App() {
  const althouse = "test";
  return (
    <div className="App">
      <Header />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
