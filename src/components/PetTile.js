import React from 'react'

const PetTile = props => {
  return(
    <div className="tile row">
      <div className="column small-6">
        <h4>{props.petData.name}</h4>
        <h5>{props.petData.species}</h5>
        <h6>{props.petData.personality}</h6>
        <p>
          <i className="far fa-heart fa-5x"></i>
        </p>
      </div>
      <div className="column small-6">
        <img width="200px" src={props.petData.image} />
      </div>
    </div>
  )
}

export default PetTile
