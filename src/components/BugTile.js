import React from 'react'

const BugTile = props => {
  return(
    <div className="tile">
      <h3>{props.bug.name}</h3>
      <h5>{props.bug.species}</h5>
      <h5>{props.bug.personality}</h5>
      <h5>{props.bug.human}</h5>
      <img src={props.bug.image} />
    </div>
  )
}

export default BugTile
