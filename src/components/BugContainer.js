import React from 'react'
import BugTile from './BugTile'

const BugContainer = props => {
  return(
    <div className="container">
      <p> I'm a bug container</p>
      <BugTile bug={props.bugs[0]}/>
      <BugTile bug={props.bugs[1]}/>
    </div>
  )
}

export default BugContainer
