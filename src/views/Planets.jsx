import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Planets = () => {
  const {id} = useParams()
  const [planets, setPlanets] = useState()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
    .then(response =>{
      console.log(response.data)
      setPlanets(response.data)
    })
    .catch(err => console.error(err))
  },[id])
  return (
    <div>
       {
        planets?
        <div>
          <h2>Name: {planets.name}</h2>
          <p>Terrain: {planets.terrain}</p>
          <p>Surface Water: {planets.surface_water}</p>
          <p>Population: {planets.population}</p>
        </div>:
        <h1>Planet does not exist</h1>
      }
    </div>
  )
}

export default Planets