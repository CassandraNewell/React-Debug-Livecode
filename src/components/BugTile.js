import React from 'react'

const BugTile = props => {
  return(
    <div className="tile">
      <h4>{props.bugData.name}</h4>
      <h4>{props.bugData.species}</h4>
      <h5>{props.bugData.personality}</h5>
      <h5>{props.bugData.human}</h5>
      <img width="200px" src={props.bugData.image} />
    </div>
  )
}

export default BugTile
