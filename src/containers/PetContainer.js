import React, { Component } from 'react'
import PetTile from '../components/PetTile'

class PetContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteId: null
    }
    this.favoriteClick = this.favoriteClick.bind(this)
  }

  favoriteClick(newFavoriteId) {
    if (newFavoriteId === this.state.favoriteId) {
      this.setState({
        favoriteId: null
      })
    } else {
      this.setState({
        favoriteId: newFavoriteId
      })
    }

    // Code below will allow you to set a fav but
    // won't allow you to re-click to unset a fav
    // this.setState({
    //   favoriteId: newFavoriteId
    // })
  }

  render() {
    let pets = this.props.pets.map(pet => {
      let handleClick = ()  => {
        this.favoriteClick(pet.id)
      }

      let favorite
      if (this.state.favoriteId === pet.id) {
        favorite = true
      } else {
        favorite = false
      }

      // Shorter way of writing logic above
      // let favorite = (this.state.favoriteId === pet.id)

      return(
        <PetTile
          key={pet.id}
          pet={pet}
          handleClick={handleClick}
          favorite={favorite}
        />
      )
    })

    return(
      <div className="container">
        {pets}
      </div>
    )
  }
}

// const PetContainer = props => {
//   let petTiles = props.pets.map(pet => {
//     return(
//       <PetTile
//         key={pet.id}
//         pet={pet}
//       />
//     )
//   })
//
//   return(
//     <div className="container">
//       {petTiles}
//     </div>
//   )
// }

export default PetContainer
