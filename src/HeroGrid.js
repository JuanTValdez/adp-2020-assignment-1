import React from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";

function HeroGrid(props) {
  return (
    <div className="Grid-Container">
     
      <Grid container justify="center" spacing={3}>
        {props.marvelData.data.results.map((item, i) => (
           <Grid item>
          <Link to={`/${item.id}`}>
            
            
              <img
                className="Grid-Images Border-Radius-Red"
              
                src={
                  item.thumbnail.path +
                  "/standard_xlarge" +
                  "." +
                  item.thumbnail.extension
                }
              />
            
           
           </Link>
           </Grid>
        ))}
      
      </Grid>

    </div>
  );
}

export default HeroGrid;
