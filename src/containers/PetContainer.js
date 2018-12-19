import React from 'react'
import PetTile from '../components/PetTile'

const PetContainer = props => {
  let petTiles = props.pets.map(pet => {
    return(
      <PetTile
        key={pet.id}
        pet={pet}
      />
    )
  })
  
  return(
    <div className="container">
      {petTiles}
    </div>
  )
}

export default PetContainer
