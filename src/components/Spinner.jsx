import React from 'react'
import pokeballImg from '../assets/img/PokéBall.png'

function Spinner() {
  document.title ='Loading...'
  return (
    <img className='pokeball' src={pokeballImg} alt="" />
  )
}

export default Spinner