import React from 'react'
import CatTile from './CatTile'

const CatContainer = props => {
  let cats = props.catProps.map(catProp => {
    return(
      <CatTile key={catProp.id} catData={catProp} />
    )
  })
  
  return(
    <div className="container">
      {cats}
    </div>
  )
}

export default CatContainer
