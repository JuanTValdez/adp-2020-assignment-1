import React, { useState, useEffect} from 'react'
import MarvelHeader from "./marvel_header.jpg"


const App = () => {

  const [marvelData, setData] = useState(null)

  const url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=281dfdf14f67bfaefa6852a403b1c138&hash=e64a7d31e8a4f7d43a0a3f3eb40115e8"

  const fetchMarvelApi =  async () => {

    const res = await fetch(url)

    const nextData = await res.json()

    setData(nextData)
  }

  

  useEffect(() => {

    fetchMarvelApi()
  },[])
  




  return (
    <header> <img src={MarvelHeader} ></img></header>
    
    <p>The Website is Working..................................................................................................................................bitches.</p>

  )
  
}

export default App