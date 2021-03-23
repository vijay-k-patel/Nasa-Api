import React from "react";

const Photo = props => (
  <div>
    <h5 className="card-title">{props.photo.title}</h5>
    <div className="card">
    <div className="card-body">
    <img  className="card-img-top" alt={props.photo.title} src={props.photo.url} />
    <p className ="card-text">{ props.photo.explanation}</p>
    <p className ="card-text">{props.photo.date}</p>
    <p className ="card-text">{ props.photo.copyright}</p>
    </div>
    </div>
    </div>
);

export default Photo;
