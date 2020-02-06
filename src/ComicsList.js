import React from 'react'
import { Grid } from "@material-ui/core";


function ComicsList(props){
    return(
        
        <div className="Container">

            <h1> Comics </h1>
            
            <Grid container justify="center" spacing={3}>
                {props.marvelData.data.results[0].comics.items.map((item, j) => (
                <Grid  key={j} item>
                <p> |  {"   " + item.name + "   "} | </p>
                </Grid>
            ))}
            </Grid>

        </div>
    )


}

export default ComicsList;