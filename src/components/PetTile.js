import React from 'react'

const PetTile = props => {

  let heartClass
  if (props.isFavorite) {
    heartClass = "fas fa-heart fa-5x"
  } else {
    heartClass = "far fa-heart fa-5x"
  }

  return(
    <div className="tile row">
      <div className="column small-6">
        <h4>{props.pet.name}</h4>
        <p>{props.pet.species}</p>
        <p>{props.pet.description}</p>
        <button>
          <i className={heartClass} onClick={props.handleClick} ></i>
        </button>
      </div>
      <div className="column small-6">
        <img width="200px" src={props.pet.image} />
      </div>
    </div>
  )
}

export default PetTile
