import React from "react";
import axios from 'axios';

import HomeFeedView from './components/HomeFeedView.jsx';
import RecipeTile from "./components/RecipeTile.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div className="main">
        <HomeFeedView/>
      </div>
    );
  }
}

export default App;