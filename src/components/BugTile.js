import React from 'react'

const BugTile = props => {
  return(
    <div className="tile row">
      <div className="column small-6">
        <h4>{props.bugData.name}</h4>
        <h5>{props.bugData.species}</h5>
        <h6>{props.bugData.personality}</h6>
        <p>
          <i className="far fa-heart fa-5x"></i>
        </p>
      </div>
      <div className="column small-6">
        <img width="200px" src={props.bugData.image} />
      </div>
    </div>
  )
}

export default BugTile
