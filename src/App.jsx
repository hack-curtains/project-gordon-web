import React from "react";
import axios from 'axios';
import SignIn from './components/SignIn.jsx';
import NavMenu from './components/NavMenu.jsx';
import webMenuIcon from '../dist/resources/menu-24.png';

import RecipeTile from "./components/RecipeTile.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showProfile: false,
      showHome: false,
      showFavorites: false,
      showNav: false,
      showLogin: true
    }
    this.captureUser = this.captureUser.bind(this);
    this.captureNavigation = this.captureNavigation.bind(this);
  }
  captureUser({ name }) {
    this.setState({ username: name });
  }
  captureNavigation(e) {
    if (e.target.getAttribute('name') === "showHome") {
      this.setState({
        showHome: true,
        showFavorites: false,
        showProfile: false
      });
    } else if (e.target.getAttribute('name') === "showFavorites") {
      this.setState({
        showHome: false,
        showFavorites: true,
        showProfile: false
      });
    } else if (e.target.getAttribute('name') === "showProfile") {
      this.setState({
        showHome: false,
        showFavorites: false,
        showProfile: true
      });
    }
  }
  render() {
    return (
      <div className="main">
        <button onClick={e => this.setState({showNav: !this.state.showNav})}><img src={webMenuIcon}></img></button>
        {this.state.showNav === true ? ( <NavMenu captureNavigation={this.captureNavigation} />) : ''}
        {this.state.showLogin === true ? (<SignIn captureUser={this.captureUser} />) : ''}

      </div>
    );
  }
}

export default App;