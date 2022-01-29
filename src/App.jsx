import React, { useImperativeHandle } from "react";
import axios from 'axios';
import { API_ADDR } from "./config";

import webMenuIcon from '../dist/resources/menu-24.png';

import NavMenu from './components/NavMenu.jsx';
import SignIn from './components/SignIn.jsx';
import SearchResultsView from "./components/SearchResultsView.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: null,
        email: null,
        pantry: [],
      },
      favorites: [],
      currentView: 'explore',
    }
    this.captureUser = this.captureUser.bind(this);
    this.captureFavorites = this.captureFavorites.bind(this);
    this.captureNavigation = this.captureNavigation.bind(this);
  }

  captureUser({ name, email, pantry }) {
    const USER_ID_TODO = 1; // FIX ME
    if (!pantry) {
      axios.get(`${API_ADDR}/users/${USER_ID_TODO}/ingredients/`)
        .then((fetchedPantry) => {
          pantry = fetchedPantry;
        });
    }
    this.setState({ user: { name, email, pantry } });
  }

  captureFavorites(favorites) {
    this.setState({ favorites });
  }

  captureNavigation(e) {
      this.setState({ currentView: e.target.getAttribute('name')});
  }

  render() {
    const { user, favorites, currentView } = this.state;
    return (
      <div className="main">
        <button onClick={e => this.setState({showNav: !this.state.showNav})}><img src={webMenuIcon}></img></button>
        {this.state.showNav === true ? ( <NavMenu captureNavigation={this.captureNavigation} />) : ''}

        {currentView === 'login' ? (<SignIn captureUser={this.captureUser} />) : ''}
        {currentView === 'explore' ? (
          <SearchResultsView
            user={user}
            favorites={favorites}
            currentView={currentView}
            captureFavorites={this.captureFavorites}
            captureNavigation={this.captureNavigation}
          />
        ) : ''}

      </div>
    );
  }
}

export default App;