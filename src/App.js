import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import HeroGrid from "./HeroGrid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/:id">
        
        {/* <HeroPage /> */}
        
      </Route>
      
    </Router>
  );
};

export default App;
