import React from "react";
import "./style.css";


function CastCard(props) {
  return (
    <div className="card">
    <img src={props.image} width="270px" height="240px" id={props.id}
    onClick={() =>
    props.clickTracker(props.id)}/>
    </div>

  )
}

export default CastCard;