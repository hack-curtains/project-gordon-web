import React, { useImperativeHandle } from "react";
import ReactDOM from 'react-dom';

import axios from 'axios';
import { API_ADDR } from "./config";

import webMenuIcon from '../dist/resources/menu-24.png';
import chef from '../dist/resources/chef.png';
import profile30 from '../dist/resources/BottomNav/user.png';

import NavMenu from './components/NavMenu.jsx';
import SignIn from './components/SignIn.jsx';
import ExploreView from "./components/ExploreView.jsx";
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
        usePantry: true,
      },
      favorites: [],
      currentView: 'home',
      previousView: '',
      showLogin: false,
      currentRecipeId: ''
    }
    this.captureUser = this.captureUser.bind(this);
    this.captureFavorites = this.captureFavorites.bind(this);
    this.captureNavigation = this.captureNavigation.bind(this);
    this.captureRecipeId = this.captureRecipeId.bind(this);
    this.captureUsePantry = this.captureUsePantry.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.closeNav = this.closeNav.bind(this);
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

  captureFavorites(recipeId = '', modify = false) {
    if (modify) {
      let action;
      if (this.state.favorites.includes(recipeId)) {
        action = 'remove';
      } else {
        action = 'add';
      }
      if (action === 'add') {
        this.setState(prevState => ({favorites: [...prevState.favorites, recipeId]}), () => {
        })
      }

      if (action === 'remove') {
        this.setState(prevState => ({favorites: prevState.favorites.filter(id => id !== recipeId)}))
      }
      // // Uncomment when userId works
      // axios.get(`${API_ADDR}/users/${this.state.user.userId}/recipes/${recipeId}/${action}`)
      // .then(res => {
      //   this.setState({favorites: res.data});
      // })
    } else {
      return this.state.favorites;

      // // Uncomment when userId works
      // axios.get(`${API_ADDR}/users/${this.state.user.userId}/recipes`)
      // .then(res => {
      //   this.setState({favorites: res.data});
      // })
    }
  }

  captureNavigation(newView) {
    this.setState(prevState => ({ previousView: prevState.currentView }))
    this.setState({ currentView: newView });

  }

  captureRecipeId(recipeId) {
    this.setState({ currentRecipeId: recipeId});
  }

  captureUsePantry() {
    const { user } = this.state;
    user.usePantry = !user.usePantry;
    this.setState({ user });
  };

  openLogin() {
    this.setState({showLogin: true});
  }

  handleClose() {
    this.setState({showLogin: false});
  }

  closeNav() {
    this.setState({showNav: false});
  }

  render() {
    const { user, favorites, currentView, showLogin, currentRecipeId, previousView } = this.state;
    return (
      <div className="main">
        <div className="navdiv">
            {window.innerWidth > 800 ? (<div className="topnav">
            <button className="navButton" onClick={e => this.setState({showNav: !this.state.showNav})} ><img src={webMenuIcon}></img></button><div className="logoBar" name="home" onMouseOver={e => {this.closeNav();}}><img className="logoIcon" src={chef} onClick={e => this.captureNavigation('home')}></img><span className="logoTitle" onClick={e => this.captureNavigation('home')}> Pantry Chef</span> <img className="profileIcon" src={profile30} onClick={e => this.captureNavigation('profile')}></img></div>
          </div>) : ''}
          {this.state.showNav === true ? ( <NavMenu captureNavigation={this.captureNavigation} closeNav={this.closeNav} />) : ''}
        </div>


        {showLogin === true ? (
        <SignInModal showLogin={this.state.showLogin} handleClose={this.handleClose}>
          <SignIn captureUser={this.captureUser} handleClose={this.handleClose}/>
        </SignInModal>
        ) : ''}

        {this.state.currentView === 'home' ? <HomeFeedView captureNavigation = {this.captureNavigation} captureRecipeId={this.captureRecipeId} favorites={favorites} captureFavorites={this.captureFavorites}/> : ''}
        {this.state.currentView === 'favorites' ? <FavoriteView captureNavigation = {this.captureNavigation} captureRecipeId={this.captureRecipeId} captureFavorites={this.captureFavorites} user={this.state.user.name}/> : ''}
        {currentView === 'explore' ? (
          <ExploreView
            user={user}
            favorites={favorites}
            currentView={currentView}
            captureFavorites={this.captureFavorites}
            captureNavigation={this.captureNavigation}
            captureRecipeId={this.captureRecipeId}
            captureUsePantry={this.captureUsePantry}
          />
        ) : ''}
        {currentView === 'recipe' ? <SoloRecipeView captureNavigation = {this.captureNavigation} recipeId={currentRecipeId} previousView={previousView} favorites={favorites} captureFavorites={this.captureFavorites}/> : ''}

        {currentView === 'profile' ? (<ProfileView openLogin={this.openLogin} captureNavigation={this.captureNavigation} />) : ''}

        {window.innerWidth < 800 ? (<BottomNav captureNavigation={this.captureNavigation}/>) : '' }
      </div>
    );
  }
}

export default App;