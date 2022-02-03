import React, { useImperativeHandle } from "react";
import ReactDOM from 'react-dom';

import axios from 'axios';
import { API_ADDR } from "./config";

import webMenuIcon from '../dist/resources/menu-24.png';
import chef from '../dist/resources/chef.png';
import profile30 from '../dist/resources/BottomNav/user-white.png';

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
        id: null,
        email: null,
        pantry: [],
        usePantry: true,
      },
      favorites: [],
      liked: [],
      currentView: 'home',
      previousView: '',
      showLogin: false,
      currentRecipeId: '',
      loggedIn: false
    }
    this.captureUser = this.captureUser.bind(this);
    this.captureFavorites = this.captureFavorites.bind(this);
    this.captureLikes = this.captureLikes.bind(this);
    this.captureNavigation = this.captureNavigation.bind(this);
    this.captureRecipeId = this.captureRecipeId.bind(this);
    this.capturePantry = this.capturePantry.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.changedLoggedIn = this.changedLoggedIn.bind(this);
    this.clearUser = this.clearUser.bind(this);
    this.checkSession = this.checkSession.bind(this);
  }

  captureUser({ name, email, id }) {
    const user = {...this.state.user};
    user.name = name;
    user.email = email;
    user.id = id;
    axios.get(`${API_ADDR}/users/${user.id}/ingredients`)
      .then((response) => {
        console.log(response.data);
      });
    this.setState({ user });
  }

  captureLikes(recipeId) {
    if (this.state.liked.includes(recipeId)) {
      this.setState(prevState => ({liked: prevState.liked.filter(id => id !== recipeId)}));
    } else {
      this.setState(prevState => ({liked: [...prevState.liked, recipeId]}));
    }
  }

  captureFavorites(recipeId = '', modify = false) {
    if (!this.state.loggedIn) {
      this.setState({showLogin: true});
    } else {
      let favoriteRecipeIds = this.state.favorites.map(element => element.id);
      if (modify) {
        if (favoriteRecipeIds.includes(recipeId)) {
          axios.put(`${API_ADDR}/users/${this.state.user.id}/recipes/${recipeId}/remove`)
          .then(res => {
            this.setState({favorites: res.data.data});
          })
        } else {
          axios.post(`${API_ADDR}/users/${this.state.user.id}/recipes/${recipeId}/add`)
          .then(res => {
            this.setState({favorites: res.data.data});
          })
        }
  
      } else {
        return this.state.favorites;
      }
    }

  }

  signUp(details) {

    let newUserObj = {
      username: details.name,
      email: details.email,
      password: details.password
    };

    let options = {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-XSRF-TOKEN': 'getCookie("XSRF-TOKEN")'
      }
    }
    let that = this;
    axios.post(`${API_ADDR}/users/new`, newUserObj, options)
      .then((response) => {
        console.log(response.data)
        this.captureUser({
          name: response.data.username,
          email: response.data.userEmail,
          id: response.data.userID
        });
      })
      .catch((error) => {
        console.error('new user sign up error:', error);
      });

  }

  login(details) {
    let userObj = {
      email: details.email,
      password: details.password
    };

    let options = {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    }
    let that = this;
    axios.post(`${API_ADDR}/users/login`, userObj, options)
      .then((response) => {
        console.log(response.data);
        this.captureUser({
          name: response.data.username,
          email: response.data.email,
          id: response.data.userID
        });
        console.log('this is document:', window)
        axios.get(`${API_ADDR}/users/${that.state.user.id}/recipes`)
          .then(res => {
            that.setState({favorites: res.data});
          })
      })
      .catch((error) => {
        console.error('user login error:', error);
      });
  }

  checkSession() {
    axios.get(`${API_ADDR}/checkSession`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error('check session error:', error)
      });
  }

  captureNavigation(newView) {
    this.setState(prevState => ({ previousView: prevState.currentView }))
    this.setState({ currentView: newView });

  }

  captureRecipeId(recipeId) {
    this.setState({ currentRecipeId: recipeId});
  }

  capturePantry(pantry, usePantry) {
    const { user } = this.state;
    user.usePantry = usePantry;
    if (pantry) {
      user.pantry = pantry;
    }
    this.setState({ user });
  };

  clearUser() {
    this.setState({user: {
      email: '',
    }})
  }
  openLogin() {
    this.setState({showLogin: true});
  }

  handleClose() {
    this.setState({showLogin: false});
  }

  closeNav() {
    this.setState({showNav: false});
  }

  changedLoggedIn() {
    this.setState({ loggedIn: !this.state.loggedIn});
  }
  componentDidMount() {
    this.checkSession();
  }

  render() {
    const { user, favorites, currentView, showLogin, currentRecipeId, previousView, liked } = this.state;
    return (
      <div className="main">
        <div className="navdiv">
            {window.innerWidth > 800 ? (<div className="topnav">
            <button className="navButton" onClick={e => this.setState({showNav: !this.state.showNav})} ><img id="navIcon" src={webMenuIcon}></img></button><div className="logoBar" name="home" onMouseOver={e => {this.closeNav();}}><img className="logoIcon" src={chef} onClick={e => this.captureNavigation('home')}></img><span className="logoTitle" onClick={e => this.captureNavigation('home')}> Pantry Chef</span> <img className="profileIcon" src={profile30} onClick={e => this.captureNavigation('profile')}></img></div>
          </div>) : ''}
          {this.state.showNav === true ? ( <NavMenu captureNavigation={this.captureNavigation} closeNav={this.closeNav} />) : ''}
        </div>


        {showLogin === true ? (
        <SignInModal showLogin={this.state.showLogin} handleClose={this.handleClose}>
          <SignIn captureUser={this.captureUser} login={this.login} signUp={this.signUp} handleClose={this.handleClose} changedLoggedIn={this.changedLoggedIn}/>
        </SignInModal>
        ) : ''}

        {currentView === 'home' ? (
          <HomeFeedView
            captureNavigation = {this.captureNavigation}
            captureRecipeId={this.captureRecipeId}
            favorites={favorites}
            captureFavorites={this.captureFavorites}
            liked={liked}
            captureLikes={this.captureLikes}
          />
        ) : ''}
        {currentView === 'favorites' ? (
          <FavoriteView
            captureNavigation = {this.captureNavigation}
            captureRecipeId={this.captureRecipeId}
            captureFavorites={this.captureFavorites}
            favorites={favorites} user={this.state.user.name}
            liked={liked}
            captureLikes={this.captureLikes}
          />
        ) : ''}
        {currentView === 'explore' || currentView === 'search' || currentView === 'pantry' ? (
          <ExploreView
            user={user}
            favorites={favorites}
            currentView={currentView}
            captureFavorites={this.captureFavorites}
            captureNavigation={this.captureNavigation}
            captureRecipeId={this.captureRecipeId}
            capturePantry={this.capturePantry}
            liked={liked}
            captureLikes={this.captureLikes}
          />
        ) : ''}
        {currentView === 'recipe' ? (
          <SoloRecipeView
            captureNavigation = {this.captureNavigation}
            recipeId={currentRecipeId}
            previousView={previousView}
            favorites={favorites}
            captureFavorites={this.captureFavorites}
            liked={liked}
            captureLikes={this.captureLikes}
            pantry={user.pantry}
          />
        ) : ''}

        {currentView === 'profile' ? (<ProfileView openLogin={this.openLogin} captureNavigation={this.captureNavigation} changedLoggedIn={this.changedLoggedIn} userObj={this.state.user} loggedIn={this.state.loggedIn}  clearUser={this.clearUser}/>) : ''}

        {window.innerWidth < 800 ? (<BottomNav captureNavigation={this.captureNavigation}/>) : '' }
      </div>
    );
  }
}

export default App;