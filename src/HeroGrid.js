import React from 'react'
import { Grid } from '@material-ui/core'

function HeroGrid(props){

    return(     

        <div className="Grid-Container">
            <Grid container spacing={2}>
      
                {props.marvelData.data.results.map((item, i) => (
        
                <Grid item>

                    <img className="Grid-Images" className="Border-Radius" src={item.thumbnail.path + "/standard_xlarge" + "." + item.thumbnail.extension} />
               
                </Grid>
                ))

                }
            </Grid>
    
      </div>
    )
}

export default HeroGrid