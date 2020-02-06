import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import ComicsList from './ComicsList.js'
import StoriesList from './StoriesList.js'
import SeriesList from './SeriesList.js'
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

  // Notifies user data is being loaded

  if (!marvelData) {
    return (
      <button className="Gen-Button">
        <b>Generating Data...</b>
      </button>
    );
  }

  return (
    <div className="Container">
      <Header />

      <div className="Wrapper-Div">
        <div className="Hero-Card Border-Radius-Red">
          <div className="Hero-Info">
            
            {/* Places clicked hero image onto card          */}

            <img
              className="Hero-Image"
              className="Border-Radius"
              src={
                marvelData.data.results[0].thumbnail.path +
                "/portrait_uncanny" +
                ".jpg"
              }
            />

            {/* Generates Hero name and Description */}

            <p className="Hero-Description">
              {" "}
              Name: {marvelData.data.results[0].name}{" "}
            </p>
            <p className="Hero-Description">
              {" "}
              Bio: {marvelData.data.results[0].description}{" "}
            </p>
          </div>
        </div>

        

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
