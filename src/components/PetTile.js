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

  let iconClass
  if (props.favorite) {
    // fontAwesome heart icon
    // iconClass = "fas fa-heart fa-5x"
    iconClass = "selected"
  } else {
    iconClass = "far fa-heart fa-5x"
  }

  return(
    <div className="tile row">
      <div className="column small-6">
        <h3>{props.pet.name}</h3>
        {breed}
        {species}
        {personality}
        <h5>{props.pet.human}</h5>
        <button>
          <i className={iconClass} onClick={props.handleClick} ></i>
        </button>
      </div>
      <div className="column small-6">
        <img src={props.pet.image} />
      </div>
    </div>
  )
}

export default PetTile
