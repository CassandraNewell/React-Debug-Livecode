import React from 'react'

const CatTile = props => {
  return(
    <div className="tile row">
      <div className="column small-6">
        <h4>{props.catData.name}</h4>
        <h5>{props.catData.personality}</h5>
        <p>
          <i className="far fa-heart fa-5x"></i>
        </p>
      </div>
      <div className="column small-6">
        <img width="200px" src={props.catData.image} />
      </div>
    </div>
  )
}

export default CatTile
