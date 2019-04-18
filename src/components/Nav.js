import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/caca">Caca</Link>
      </li>
      <li>
        <Link to="/two-way-bind">TwoWayBinding</Link>
      </li>
      <li>
        <Link to="/edit">Edit</Link>
      </li>
    </ul>
  );
}

export default App;
