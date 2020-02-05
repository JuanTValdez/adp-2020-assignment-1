import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import "./Home.css";

const HeroPage = () => {

    const [marvelData, setData] = useState(null);
    const { id } = useParams()


    const url =
     `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=281dfdf14f67bfaefa6852a403b1c138&hash=e64a7d31e8a4f7d43a0a3f3eb40115e8`;
       

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
      
      console.log(marvelData.data.results[0].comics.items[0].name)
     
     
      
    return(

        <div className="Container">
                
                <Header/>  

            <div className="Wrapper-Div">

                <div className="Hero-Card Border-Radius-Red" >
                    
                    <div className="Hero-Info">
                    
                    
                        <img className="Hero-Image" className="Border-Radius" src={marvelData.data.results[0].thumbnail.path + "/portrait_uncanny" + ".jpg"} />
                        <p className= "Hero-Description"> Name:  {marvelData.data.results[0].name} </p>
                        <p className="Hero-Description"> Bio: {marvelData.data.results[0].description}  </p>
                    
                    </div>  

                    
                </div> 
                
                <div className="Hero-Details Border-Radius-Red" >
                    <h1> Comics </h1>

                        <Grid container justify="center" spacing={3}>
                             {marvelData.data.results[0].comics.items.map((item, j) => (

                            <Grid className='Border-Radius-Red' key={j} item>
                                
                                <p >{item.name}</p>
            
                            </Grid>
                            ))}
      
                        </Grid>


                    <h1> Stories </h1>

                            <Grid container justify="center" spacing={3}>
                                {marvelData.data.results[0].stories.items.map((item, k) => (
                                        
                                <Grid className='Border-Radius-Red' key={k} item>

                                    <p>{item.name}</p>

                                </Grid>     
                                ))}
                            
                            </Grid>   
                        

                    <h1> Series </h1>
                    

                            <Grid container justify="center" spacing={3}>
                                {marvelData.data.results[0].series.items.map((item,l) => (

                                <Grid className='Border-Radius-Red' key={l} item>

                                    <p> {item.name} </p>
                                
                                </Grid>
                                ))}

                            </Grid>

                </div>

            </div>
           
        </div>

 
       )



};




export default HeroPage;
