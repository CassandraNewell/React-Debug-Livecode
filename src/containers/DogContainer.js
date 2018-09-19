import React from 'react'
import DogTile from './DogTile'

const DogContainer = props => {
  let dogs = props.dogProps.map(dogProp => {
    return(
      <DogTile key={dogProp.id} dogData={dogProp} />
    )
  })

  return(
    <div className="container">
      {dogs}
    </div>
  )
}

export default DogContainer
