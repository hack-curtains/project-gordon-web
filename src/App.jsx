import React from "react";
import axios from 'axios';
import SignIn from './components/SignIn.jsx';
import NavMenu from './components/NavMenu.jsx';
import webMenuIcon from '../dist/resources/menu-24.png';
import ProfileView from './components/ProfileView.jsx';
import RecipeTile from "./components/RecipeTile.jsx";
import BottomNav from './components/BottomNav.jsx';
import SignInModal from './components/SignInModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      currentView: 'home',
      showLogin: false

    }
    this.captureUser = this.captureUser.bind(this);
    this.captureNavigation = this.captureNavigation.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  captureUser({ name }) {
    this.setState({ username: name });
  }
  captureNavigation(e) {
      this.setState({ currentView: e.target.getAttribute('name')});
  }
  handleClose() {
    this.setState({showLogin: false});
  }
  render() {
    return (
      <div className="main">
        <div className="navdiv">
            {window.innerWidth > 800 ? (<div className="topnav">
            <button className="navButton" onClick={e => this.setState({showNav: !this.state.showNav})}><img src={webMenuIcon}></img></button><div className="logoBar" name="home" onClick={e => this.captureNavigation(e)}>Pantry Chef</div>
          </div>) : ''}

          {this.state.showNav === true ? ( <NavMenu captureNavigation={this.captureNavigation} />) : ''}
        </div>
        <button onClick={e => this.setState({showLogin: true})}>Show Sign In</button>
        {this.state.showLogin === true ? (
        <SignInModal showLogin={this.state.showLogin} handleClose={this.handleClose}>
          <SignIn captureUser={this.captureUser} handleClose={this.handleClose}/>
        </SignInModal>
        ) : ''}
        {this.state.currentView === 'profile' ? (<ProfileView captureNavigation={this.captureNavigation} />) : ''}

        {window.innerWidth < 800 ? (<BottomNav captureNavigation={this.captureNavigation}/>) : '' }
      </div>
    );
  }
}

export default App;