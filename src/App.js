import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import HeroPage from "./HeroPage";

const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/:id">
        <HeroPage />
      </Route>
    </Router>
  );
};

export default App;
