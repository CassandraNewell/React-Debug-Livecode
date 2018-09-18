import React from 'react'
import DogTile from './DogTile'

const DogContainer = props => {
  return(
    <div className="container">
      <DogTile dogData={props.dogProps[0]} />
      <DogTile dogData={props.dogProps[1]}/>
    </div>
  )
}

export default DogContainer
