import React from 'react'
import PetTile from '../components/PetTile'

const PetContainer = props => {
  let pets = props.pets.map(pet => {
    return(
      <PetTile key={pet.id} pet={pet} />
    )
  })

  return(
    <div className="container">
      {pets}
    </div>
  )
}

export default PetContainer
