import React from 'react'

const CatTile = props => {
  return(
    <div className="tile">
      <h4>{props.catData.name}</h4>
      <h5>{props.catData.personality}</h5>
      <h5>{props.catData.human}</h5>
      <img width="200px" src={props.catData.image} />
    </div>
  )
}

export default CatTile
