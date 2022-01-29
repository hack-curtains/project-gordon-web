import React from "react";
import axios from 'axios';
import SignIn from './components/SignIn.jsx';
import NavMenu from './components/NavMenu.jsx';
import webMenuIcon from '../dist/resources/menu-24.png';

import HomeFeedView from './components/HomeFeedView.jsx';
import RecipeTile from "./components/RecipeTile.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      currentView: 'login'
    }
    this.captureUser = this.captureUser.bind(this);
    this.captureNavigation = this.captureNavigation.bind(this);
  }
  captureUser({ name }) {
    this.setState({ username: name });
  }
  captureNavigation(e) {
      this.setState({ currentView: e.target.getAttribute('name')});
  }
  render() {
    return (
      <div className="main">
        <button onClick={e => this.setState({showNav: !this.state.showNav})}><img src={webMenuIcon}></img></button>
        {this.state.showNav === true ? ( <NavMenu captureNavigation={this.captureNavigation} />) : ''}

        {this.state.currentView === 'login' ? (<SignIn captureUser={this.captureUser} />) : ''}

        <HomeFeedView/>
      </div>
    );
  }
}

export default App;