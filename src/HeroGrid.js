import React from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";

function HeroGrid(props) {
  return (
    <div className="Grid-Container">
      <Grid container justify="center" spacing={6}>
        {props.marvelData.data.results.map((item, i) => (
          <Link to={`/${item.id}`}>
            <Grid item>
              <img
                className="Grid-Images"
                className="Border-Radius"
                src={
                  item.thumbnail.path +
                  "/standard_xlarge" +
                  "." +
                  item.thumbnail.extension
                }
              />
            </Grid>
          </Link>
        ))}
      </Grid>
    </div>
  );
}

export default HeroGrid;
