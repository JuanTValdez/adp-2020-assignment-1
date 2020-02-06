import React from 'react'
import { Grid } from "@material-ui/core";


function SeriesList(props){
    return(
        
        <div className="Container">
            
            <h1> Series </h1>

            <Grid container justify="center" spacing={3}>
            {props.marvelData.data.results[0].series.items.map((item, l) => (
              <Grid  key={l} item>
                <p> | {"   " + item.name + "   "} | </p>
              </Grid>
            ))}
          </Grid>
          

        </div>
    )


}

export default SeriesList;