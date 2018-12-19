import React from 'react'

const PetTile = props => {

  let breed
  if (props.pet.breed) {
    breed = <h5>{props.pet.breed}</h5>
  }

  let species
  if (props.pet.species) {
    species = <h5>{props.pet.species}</h5>
  }

  let personality
  if (props.pet.personality) {
    personality = <h5>{props.pet.personality}</h5>
  }

  return(
    <div className="tile">
      <h3>{props.pet.name}</h3>
      {breed}
      {species}
      {personality}
      <h5>{props.pet.human}</h5>
      <img src={props.pet.image} />
    </div>
  )
}

export default PetTile
