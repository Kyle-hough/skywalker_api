import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const People = () => {
  const {id} = useParams()
  const [people, setPeople] = useState()
  const [homeInfo, setHomeInfo] = useState({})

  const getHomeInfo = (url) => {
    axios.get(url)
    .then(response => {
      setHomeInfo(response.data)
    })
    .catch(err => console.error(err))
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(response =>{
      console.log(response.data)
      setPeople(response.data)
      getHomeInfo(response.data.homeworld)
    })
    .catch(err => console.error(err))
  },[id])

  return (
    <div>
      {
        people?
        <div>
          <h2>Name: {people.name}</h2>
          <p>Height: {people.height}</p>
          <p>Hair Color: {people.hair_color}</p>
          <p>Gender: {people.gender}</p>
          <p>Home World: {homeInfo.name}</p>
        </div>:
        <h1>Person does not exist</h1>
      }
    </div>
  )
}

export default People