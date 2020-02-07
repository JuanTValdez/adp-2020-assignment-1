import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { Button } from '@material-ui/core';
import Header from "./Header";
import ComicsList from './ComicsList.js'
import StoriesList from './StoriesList.js'
import SeriesList from './SeriesList.js'
import HeroCard from './HeroCard.js'
import "./Home.css";

const HeroPage = () => {
  const [marvelData, setData] = useState(null);
  const { id } = useParams();

  // Fetching data dynamically depending on which hero was clicked on home page

  const url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=281dfdf14f67bfaefa6852a403b1c138&hash=e64a7d31e8a4f7d43a0a3f3eb40115e8`;

  const fetchApi = async () => {
    const res = await fetch(url);

    const nextData = await res.json();

    setData(nextData);
  };

  useEffect(() => {
    fetchApi();
  }, []);


  if (!marvelData) {
    return (
      
      <p className="Gen-Data">Generating Data...</p>
    );
  }

  return (
    <div className="Container">
      
      <Header />
     
     <div className="Wrapper-Div">

          {/* Generates Hero Card*/}

          <HeroCard marvelData={marvelData}/>
          
        <div className="Hero-Details Border-Radius-Red">
            
            {/* Generates a list of comics the hero appears in */}

          <ComicsList marvelData={marvelData} />
          
            {/* Generates a list of stories the hero appears in */}

          <StoriesList marvelData={marvelData} />

            {/* Generates a list of series the hero appears in */}

          <SeriesList marvelData={marvelData} />
          
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
