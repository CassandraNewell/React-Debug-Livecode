import React from "react";
import PetContainer from "./PetContainer";

const App = props => {
  return (
    <div className="app">
      <PetContainer pets={props.animals}/>
    </div>
  );
};

export default App;
