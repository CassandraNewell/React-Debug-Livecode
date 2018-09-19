import React from 'react'

const DogTile = props => {
  return(
    <div className="tile row">
      <div className="column small-6">
        <h4>{props.dogData.name}</h4>
        <h5>{props.dogData.breed}</h5>
        <p>
          <i className="far fa-heart fa-5x"></i>
        </p>
      </div>
      <div className="column small-6">
        <img width="200px" src={props.dogData.image} />
      </div>
    </div>
  )
}

export default DogTile
