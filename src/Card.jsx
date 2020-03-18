import React from "react";

const Card = (props) => {
  console.log(props);

  return(
    <div className="Picture-List">
      <h2>Title: {props.title}</h2>
      <p>Description: {props.explanation}</p>
      <p>Date: {props.date}</p>
      <div className="bottomImage">
        <img className="nasa-image" alt="nasa photo" src={props.url}/>
      </div>
    </div>

  );
};

export default Card;
