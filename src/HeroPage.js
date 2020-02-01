import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useStyles from "./HeroPageStyles";
import Header from "./Header";

const HeroPage = () => {

    const [marvelData, setData] = useState(null);
    const classes = useStyles()
    const { id } = useParams()


    const url =
     `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=281dfdf14f67bfaefa6852a403b1c138&hash=e64a7d31e8a4f7d43a0a3f3eb40115e8`;
        // fetch goes here

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
    
          <button className="Gen-Button"><b>Generating Data...</b></button>
          
        );
      }
    
      
    return(

        <div className="Div-Wrapper">
            <Header/>  

            <div className="Hero-Card" >
                {console.log(marvelData.data.results[0].name)}
                <div className="Hero-Info">
                
                
                <img className="Hero-Image" className="Border-Radius" src={marvelData.data.results[0].thumbnail.path + "/portrait_uncanny" + ".jpg"} />
                <p className= "Hero-Description"> Name:  {marvelData.data.results[0].name} </p>
                <p className="Hero-Description"> Bio: {marvelData.data.results[0].description}  </p>
                
            </div>  

            </div> 

        </div>

 
       )



};




export default HeroPage;
