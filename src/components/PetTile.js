import React from 'react'

const PetTile = props => {
  return(
    <div className="tile row">
      <div className="column small-6">
        <h4>{props.pet.name}</h4>
        <p>{props.pet.species}</p>
        <p>{props.pet.description}</p>
        <p>
          <i className="far fa-heart fa-5x"></i>
        </p>
      </div>
      <div className="column small-6">
        <img width="200px" src={props.pet.image} />
      </div>
    </div>
  )
}

export default PetTile
