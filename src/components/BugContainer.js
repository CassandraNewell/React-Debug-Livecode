import React from 'react'
import BugTile from './BugTile'

const BugContainer = props => {
  let bugs = props.bugProps.map(bugProp => {
    return(
      <BugTile key={bugProp.id} bugData={bugProp} />
    )
  })

  return(
    <div className="container">
      {bugs}
    </div>
  )
}

export default BugContainer
