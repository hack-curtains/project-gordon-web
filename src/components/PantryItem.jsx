import React, { useState, useEffect } from 'react';

const PantryItem = ({ name, togglePantry, isActive }) => {



  return (
    <div className={`pantryItem ${isActive ? 'active' : ''} unselectable`} onClick={() => togglePantry([name])}>
      <span>{name}</span>
    </div>
  )
}

export default PantryItem;