import React from 'react';
import './Home.css'
import { Button } from '@material-ui/core';


export default function HeroCard(props){



const printMessage =function printMessage(){

    console.log("HELLO ")
}

    return(
         


            <div className="Hero-Card Border-Radius-Red">
                
                <div className="Hero-Info">
                    
                    {/* Places clicked hero image onto card          */}

                    <img
                    className="Hero-Image"
                    className="Border-Radius"
                    src={
                        props.marvelData.data.results[0].thumbnail.path +
                        "/portrait_uncanny" +
                        ".jpg"
                    }
                    />

                    {/* Generates Hero name and Description */}

                    <p className="Hero-Description">
                    {" "}
                    Name: {props.marvelData.data.results[0].name}{" "}
                    </p>
                    <p className="Hero-Description">
                    {" "}
                    Bio: {props.marvelData.data.results[0].description}{" "}
                    </p>
                </div>
                
                <button onClick={printMessage} className="Home-Button"> Return to Home </button>
                
            </div>
        
        
        
        
    )

}

