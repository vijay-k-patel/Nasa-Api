import React, { Component } from "react";
import Photo from "../PhotoOfDay/Photo";

class PhotoContainer extends Component {
  render() {
    return ( 
        <Photo
        photo={this.props.photo}
        date={this.props.date}
        />
    );
  }
}

export default PhotoContainer;
