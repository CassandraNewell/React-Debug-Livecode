import React from 'react';
import DogContainer from './DogContainer'
import CatContainer from './CatContainer'
import BugContainer from './BugContainer'

const App = props => {
  return(
    <div className = "app">
      <h1>AmyLynn's Pets!</h1>
      <DogContainer dogProps={props.animals.dogs} />
      <CatContainer catProps={props.animals.cats}/>
      <BugContainer bugProps={props.animals.bugs}/>
    </div>
  )

}

export default App;
