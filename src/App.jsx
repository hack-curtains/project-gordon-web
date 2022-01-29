import React from "react";
import axios from 'axios';
import SignIn from './components/SignIn.jsx';
import NavMenu from './components/NavMenu.jsx';
// import webMenuIcon from '../assets/menu-48.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showProfile: false,
      showHome: false,
      showFavorites: false,
      showNav: false
    }
    this.captureUser = this.captureUser.bind(this);
    this.captureNavigation = this.captureNavigation.bind(this);
  }
  captureUser({ name }) {
    this.setState({ username: name });
  }
  captureNavigation(e) {
    console.log([e.target.getAttribute('name')]);
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
        <button onClick={e => this.setState({showNav: !this.state.showNav})}>Menu</button>
        {this.state.showNav === true ? ( <NavMenu captureNavigation={this.captureNavigation} />) : ''}
        <SignIn captureUser={this.captureUser} />
      </div>
    );
  }
}

export default App;