import React, { useState, useEffect } from 'react';

const PantryItem = ({ name, togglePantryItem, isActive, usePantry }) => {



  return (
    <div className={`pantryItem ${isActive && usePantry ? 'active' : ''} unselectable`} onClick={() => {
      if (usePantry) togglePantryItem([name]);
    }}>
      <span>{name}</span>
    </div>
  )
}

export default PantryItem;