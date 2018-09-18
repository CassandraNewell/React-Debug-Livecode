import React from 'react'

const DogTile = props => {
  return(
    <div className="tile">
      <h4>{props.dogData.name}</h4>
      <h5>{props.dogData.breed}</h5>
      <h5>{props.dogData.human}</h5>
      <img width="200px" src={props.dogData.image} />
    </div>
  )
}

export default DogTile
