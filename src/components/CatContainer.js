import React from "react";
import CatTile from "./CatTile";

const CatContainer = props => {
  return (
    <div className="container">
      <p>Welcome to the Cat Box</p>
      <CatTile cat={props.cats[0]} />
      <CatTile cat={props.cats[1]} />
      <CatTile cat={props.cats[2]} />
      <CatTile cat={props.cats[3]} />
    </div>
  );
};

export default CatContainer;
