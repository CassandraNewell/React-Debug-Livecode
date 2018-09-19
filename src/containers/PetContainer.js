// src/containers/PetContainer.js
import React, { Component } from 'react'
import PetTile from '../components/PetTile'

class PetContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteId: null
    }
    this.setFavorite = this.setFavorite.bind(this)
  }

  setFavorite(newFavoriteId) {
    // if we didn't care about users trying to favorite already-favorited floofs:
    // this.setState({favoriteId: newFavoriteId})

    // to handle reclicks (unclicks, whatever you call them)
    if (this.state.favoriteId === newFavoriteId) {
      this.setState({favoriteId: null})
    } else {
      this.setState({favoriteId: newFavoriteId})
    }
  }

  render(){
    debugger
    let pets = this.props.pets.map(pet => {
      let handleClick = () => {
        this.setFavorite(pet.id)
      }

      let isFavorite
      if (pet.id === this.state.favoriteId) {
        isFavorite = true
      } else {
        isFavorite = false
      }

      // equivalent to the above!
      // let isFavorite = (pet.id === this.state.favoriteId)

      return(
        <PetTile
          key={pet.id}
          pet={pet}
          handleClick={handleClick}
          isFavorite={isFavorite}
        />
      )
    })

    return(
      <div>
        {pets}
      </div>
    )
  }
}

export default PetContainer

// import React from 'react'
// import PetTile from '../components/PetTile'
//
// const PetContainer = props => {
//   let pets = props.pets.map(pet => {
//     return(
//       <PetTile key={pet.id} pet={pet} />
//     )
//   })
//
//   return(
//     <div className="container">
//       {pets}
//     </div>
//   )
// }
//
// export default PetContainer
