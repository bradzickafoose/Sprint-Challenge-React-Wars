import React, { useState, useEffect } from "react";
import endpoint from "./endpoint";

import Characters from "./components/Characters";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(endpoint + '/people')
      .then(response => response.json())
      .then(response => {
        const characters = response.results
        console.log('React Wars characters:', characters)
        setCharacters(characters)
      })
      .catch(error => console.log('Error retrieving characters data:', error));
  }, []);

    return (
        <div className="App">
            <header className="Header">
                <h1>React Wars</h1>
            </header>
            <Characters characters={characters} />
        </div>
    );
};

export default App;
