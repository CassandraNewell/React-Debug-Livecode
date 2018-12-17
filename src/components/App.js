import React from "react";
import CatContainer from "./CatContainer";
import BugContainer from './BugContainer'

const App = props => {
  return (
    <div className="app">
      <h1>Pets go here!</h1>
      <BugContainer bugs={props.animals.bugs}/>
      <CatContainer cats={props.animals.cats} />
    </div>
  );
};

export default App;
