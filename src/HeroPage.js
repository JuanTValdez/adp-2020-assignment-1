import React from "react";
import { useParams } from "react-router-dom";
import useStyles from "./HeroPageStyles";

const HeroPage = () => {

        const classes = useStyles()
        const { id } = useParams()

        // fetch goes here
        fetch(`https://example.com/${id}`)

    return(


 
       )



};




export default HeroPage;
