import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterInfo from "./CharacterInfo";
// import styled from "styled-components";

export default function CharactersList() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(result => {
            const characters = result.data.results
            console.log("React Wars characters:", result.data.results)
            setCharacters(characters)
        })
        .catch(error => {
            console.log("Where da data at?", error);
        });
    }, []);

    // if(!character.name) return <h3>Loading...</h3>

    return (
        <div className="characters">
            {characters.map(character => {
                return (
                    <CharacterInfo
                        key={character.created}
                        name={character.name}
                        homeworld={character.homeworld}
                        gender={character.gender}
                        birth_year={character.birth_year} 
                        eye_color={character.eye_color}
                        hair_color={character.hair_color}
                        height={character.height}
                        mass={character.mass}
                        skin_color={character.skin_color}
                        films={character.films}
                        vehicles={character.vehicles}
                    />
                );
            })}
        </div>
    );
}