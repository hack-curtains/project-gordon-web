import React, { useImperativeHandle } from "react";
import axios from 'axios';
import { API_ADDR } from "./config";

import webMenuIcon from '../dist/resources/menu-24.png';

import NavMenu from './components/NavMenu.jsx';
import SignIn from './components/SignIn.jsx';
import SearchResultsView from "./components/SearchResultsView.jsx";
import ProfileView from './components/ProfileView.jsx';
import RecipeTile from "./components/RecipeTile.jsx";
import BottomNav from './components/BottomNav.jsx';
import SignInModal from './components/SignInModal.jsx';
import SoloRecipeView from './components/SoloRecipeView.jsx';
import HomeFeedView from './components/HomeFeedView.jsx';
import FavoriteView from './components/FavoriteView.jsx';

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
      currentView: 'home',
      showLogin: false
    }
    this.captureUser = this.captureUser.bind(this);
    this.captureFavorites = this.captureFavorites.bind(this);
    this.captureNavigation = this.captureNavigation.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  handleClose() {
    this.setState({showLogin: false});
  }

  render() {
    const { user, favorites, currentView, showLogin } = this.state;
    return (
      <div className="main">
        <div className="navdiv">
            {window.innerWidth > 800 ? (<div className="topnav">
            <button className="navButton" onClick={e => this.setState({showNav: !this.state.showNav})}><img src={webMenuIcon}></img></button><div className="logoBar" name="home" onClick={e => this.captureNavigation(e)}>Pantry Chef</div>
          </div>) : ''}
          {this.state.showNav === true ? ( <NavMenu captureNavigation={this.captureNavigation} />) : ''}
        </div>
        <button onClick={e => this.setState({showLogin: true})}>Show Sign In</button>

        {showLogin === true ? (
        <SignInModal showLogin={this.state.showLogin} handleClose={this.handleClose}>
          <SignIn captureUser={this.captureUser} handleClose={this.handleClose}/>
        </SignInModal>
        ) : ''}

        {window.innerWidth < 800 ? (<BottomNav captureNavigation={this.captureNavigation}/>) : '' }
        {this.state.currentView === 'home' && <HomeFeedView captureNavigation = {this.captureNavigation}/>}
        {this.state.currentView === 'favorites' && <FavoriteView/>}
        {currentView === 'explore' ? (
          <SearchResultsView
            user={user}
            favorites={favorites}
            currentView={currentView}
            captureFavorites={this.captureFavorites}
            captureNavigation={this.captureNavigation}
          />
        ) : ''}

        {currentView === 'profile' ? (<ProfileView captureNavigation={this.captureNavigation} />) : ''}

        {window.innerWidth < 800 ? (<BottomNav captureNavigation={this.captureNavigation}/>) : '' }

      </div>
    );
  }
}

export default App;