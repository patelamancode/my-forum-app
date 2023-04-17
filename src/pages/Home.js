import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <h1>Welcome John</h1>
      <NavLink to='/Question-page'>Go To Question Page</NavLink>
    </div>
  )
}

export default Home
