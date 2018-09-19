import React from 'react'
import PetTile from '../components/PetTile'

const PetContainer = props => {
  let pets = props.pets.map(petProp => {
    return(
      <PetTile key={petProp.id} petData={petProp} />
    )
  })

  return(
    <div className="container">
      {pets}
    </div>
  )
}

export default PetContainer
