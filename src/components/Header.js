import React, { useState } from 'react';
import '../App.css';  // Correct the import path

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm); 
  };

  return (
    <header>
      <div className='movieh1'> <h1>
          <span className="red">M</span>ovie App
        </h1></div>
     <div className='scarch1'> <form onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          placeholder="Search for a movie..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        <button type="submit">Search</button>
      </form></div>
    </header>
  );
}

export default Header;
