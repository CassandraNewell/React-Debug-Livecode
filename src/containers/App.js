import React from 'react';
import PetContainer from './PetContainer'

const App = props => {
  return(
    <div className="app">
      <h1>AmyLynn's Pets!</h1>
      <PetContainer pets={props.animals} />
    </div>
  )
}

export default App;
