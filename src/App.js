import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from 'components/Nav';
import Home from 'components/Home';
import Caca from 'components/Caca';
import Edit from 'components/Edit';

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/caca" component={Caca} />
        <Route path="/edit" component={Edit} />
      </div>
    </Router>
  );
}



export default App;
