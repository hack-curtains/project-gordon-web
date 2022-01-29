import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchView from './SearchView.jsx';

const SearchResultsView = ({ favorites, currentView, captureFavorites, captureNavigation }) => {

  return (
    <div>
      <SearchView />
    </div>
  )
}

export default SearchResultsView;