import React from "react";
import axios from 'axios';
import SignIn from './components/SignIn.jsx';

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
  }
  captureUser({ name }) {
    this.setState({ username: name });
  }
  render() {
    return (
      <div className="main">
        <SignIn captureUser={this.captureUser} />
      </div>
    );
  }
}

export default App;