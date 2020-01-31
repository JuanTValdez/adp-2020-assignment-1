import React, { useState, useEffect} from 'react';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Header from './Header'
import HeroGrid from './HeroGrid'
import './App.css';

const randomCard = Math.floor(Math.random() * Math.floor(20));
console.log(randomCard)
const App = () => {
  
  const [marvelData, setData] = useState(null);
  
  
  /*const marvelNullChecker = marvelData && marvelData.data;*/
  
  const url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=281dfdf14f67bfaefa6852a403b1c138&hash=e64a7d31e8a4f7d43a0a3f3eb40115e8"

  const fetchMarvelApi =  async () => {

    const res = await fetch(url)

    const nextData = await res.json()

    setData(nextData)

  }

  

  useEffect(() => {

    fetchMarvelApi()
    
  },[])
  
  function handleDataGen()
  {

    console.log("Cocaine smells good!")

  }
  
  /*marvelData && console.log(marvelData.data.results[0].thumbnail.extension)
  console.log(marvelData.data.results[0].name)*/
  if(!marvelData){
      return(
        <Button onClick={handleDataGen} variant="contained" color="secondary">
        Generate
      </Button>
      )
  }


  return (
    <div className="Wrapper-Div">

        <Header/>     

          <div className="HeroGrid">

            <HeroGrid marvelData={marvelData}/>

          </div>





          {/* <div className="Grid-Container">
            <Grid container spacing={2}>
          
              {marvelData.data.results.map((item, i) => (
            
                <Grid item>
                    <img className="Grid-Images" className="Border-Radius" src={item.thumbnail.path + "/standard_large" + "." + item.thumbnail.extension} />
                </Grid>
              ))

             }
             </Grid>
        
          </div> */}
      
      <div className="Hero-Card" >

          <div className="Hero-Info">

              <img className="Hero-Image" className="Border-Radius" src={marvelData.data.results[randomCard].thumbnail.path + "/portrait_uncanny" + ".jpg"} />
              <p className= "Hero-Description"> Name:  {marvelData.data.results[randomCard].name} </p>
              <p className="Hero-Description"> Bio: {marvelData.data.results[randomCard].description}  </p>
              
          </div>

      </div>
    

    </div>

  )
  
}

export default App