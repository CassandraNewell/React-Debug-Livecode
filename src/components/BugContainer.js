import React from 'react'
import BugTile from './BugTile'

const BugContainer = props => {
  return(
    <div className="container">
      <BugTile bugData={props.bugProps[0]} />
      <BugTile bugData={props.bugProps[1]} />
    </div>
  )
}

export default BugContainer
