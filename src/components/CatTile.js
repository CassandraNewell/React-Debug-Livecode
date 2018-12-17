import React from "react";

const CatTile = props => {
  return(
    <div className="tile">
      <h3>{props.cat.name}</h3>
      <h5>{props.cat.breed}</h5>
      <h5>{props.cat.personality}</h5>
      <h5>{props.cat.human}</h5>
      <img src={props.cat.image} />
    </div>
  );
};

export default CatTile;
