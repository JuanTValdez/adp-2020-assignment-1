import React from 'react'
import { Grid } from "@material-ui/core";


function StoriesList(props){
    return(
        
        <div className="Container">

            <h1> Stories </h1>

            <Grid container justify="center" spacing={3}>
            {props.marvelData.data.results[0].stories.items.map((item, k) => (
              <Grid  key={k} item>
                <p>| {"   " + item.name + "   "} |</p>
              </Grid>
            ))}
          </Grid>
            

        </div>
    )


}

export default StoriesList;