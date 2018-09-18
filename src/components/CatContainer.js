import React from 'react'
import CatTile from './CatTile'

const CatContainer = props => {
  return(
    <div className="container">
      <CatTile catData={props.catProps[0]} />
      <CatTile catData={props.catProps[1]}/>
    </div>
  )
}

export default CatContainer
