import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import Home from './components/Page/Home';
import Asset from './components/Page/Asset';

class App extends Component {
  render() {
    return (
      <div>
        <h1>NASA Media Search</h1>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/search/:query" component={Search} />
        <Route path="/asset/:id" component={Asset} /></Router>
      </div> 
    );
  }
}

export default App;
