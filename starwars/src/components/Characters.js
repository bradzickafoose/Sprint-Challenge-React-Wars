import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

export default function CharactersList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
          .get('https://swapi.py4e.com/api/people/')
          .then(result => {
            const characters = result.data.results
            console.log('React Wars characters:', characters)
            setCharacters(characters)
          })
          .catch(error => console.log('Error retrieving characters data:', error));
    }, []);

    return (
        <section className='characters'>
            {characters.map(character => <Character key={character.created} {...character} /> )}
        </section>
    );
}