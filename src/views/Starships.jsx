import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Starships = () => {
  const {id} = useParams()
  const [starships, setStarships] = useState()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}`)
    .then(response =>{
      console.log(response.data)
      setStarships(response.data)
    })
    .catch(err => console.error(err))
  },[id])
  return (
    <div>
      {
        starships?
        <div>
          <h2>Name: {starships.name}</h2>
          <p>Manufacturer: {starships.manufacturer}</p>
          <p>Cost: {starships.cost_in_credits}</p>
          <p>Length: {starships.length}</p>
        </div>:
        <h1>Starship does not exist</h1>
      }
    </div>
  )
}

export default Starships