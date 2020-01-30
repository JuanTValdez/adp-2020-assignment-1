import React, { useState, useEffect} from 'react';
import Button from '@material-ui/core/Button'
import Header from './Header'
import './App.css';


const App = () => {
  
  const [marvelData, setData] = useState(null)
  const marvelNullChecker = marvelData && marvelData.data;
  
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
      
      <div className="Hero-Card">

          <div className="Hero-Info">


          
              <img className="Hero-Image" src={marvelData.data.results[1].thumbnail.path + "/portrait_medium" + ".jpg"} />
              
              
          </div>
        
      </div>
    

    </div>

  )
  
}

export default App