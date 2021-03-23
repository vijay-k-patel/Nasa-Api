import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBox from '../Search/SearchBox';
import PhotoContainer from '../PhotoOfDay/PhotoContainer';
import moment from "moment";

const API_KEY = "8ZpcZooJmBN0eFYx4vNov5jKjbTRQ8efAO0Hedhm";

const getRandom = max => Math.floor(Math.random() * max) + 1;  

export class Home extends React.Component {
  state = {
    photo: "",
    date: moment(),  
  };

   componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

    handleSubmit = query => {
      const { history } = this.props;
      history.push(`/search/${query}`);
  };
  
    setPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  };
  


  render() {
    return (
      <div className={`${getRandom(10)}`}>
        <div className="">
          <div className="">
            <h1 className=""></h1>
            <SearchBox onSubmit={this.handleSubmit} />
            <PhotoContainer
          photo={this.state.photo}
          setPhoto={this.setPhoto}
          />
          </div>
        </div>  
      </div>
    );
  }
}

export default withRouter(Home);
