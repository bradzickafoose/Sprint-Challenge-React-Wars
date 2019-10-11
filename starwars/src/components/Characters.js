import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from "./CharacterInfo";
// import styled from "styled-components";

export default function Characters(props) {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(result => {
            const characters = result.data;
            setCharacters(characters)
            console.log("React Wars characters", result.data.results)
        })
    }, [])

    if(!characters.url) return <h3>Loading...</h3>

    return (
        <div className="character-container">
            {characters.map(character => {
                return (
                    <CharacterInfo 
                        key={character.id}
                    />
                )
            })}
        </div>
    )
}