import React, { useState } from 'react';
import SearchBar from './searchbar';
import Dictionary from './dictionary';
import './App.css';

const initialDictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

const App = () => {
  const [dictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSearch = () => {
    const word = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
    if (word) {
      setDefinition(word.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <h3>Definition:</h3>
      <Dictionary definition={definition} />
    </div>
  );
};

export default App;