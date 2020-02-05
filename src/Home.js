import React, { useState, useEffect } from "react";
import Header from "./Header";
import HeroGrid from "./HeroGrid";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [marvelData, setData] = useState(null);

  const url =
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=281dfdf14f67bfaefa6852a403b1c138&hash=e64a7d31e8a4f7d43a0a3f3eb40115e8";

  const fetchMarvelApi = async () => {
    const res = await fetch(url);

    const nextData = await res.json();

    setData(nextData);
  };

  useEffect(() => {
    fetchMarvelApi();
  }, []);

  if (!marvelData) {
    return (
      <button className="Gen-Button">
        <b>Generating Data...</b>
      </button>
    );
  }

  return (
    <div className="Wrapper">
      <Header />

      <div className="HeroGrid">
        <HeroGrid marvelData={marvelData} />
      </div>
    </div>
  );
};

export default App;
