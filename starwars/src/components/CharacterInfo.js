import React from "react";
import styled from "styled-components";

const Character = styled.div`
    padding: 1.5rem;
    background-color: #fff;
    border-radius: .5rem;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);
`;

const CharacterName = styled.h2`
    color: #4f4a4a;
`;

const CharacterStats = styled.div`
    display: grid;
    grid-gap: .5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const CharacterStat = styled.span`
    color: #bfb19b;
    font-size: .8rem;

    span {
        display: block;
        font-weight: bold;
    }
`;

const CharacterInfo = props => {
    return (
            <Character key={props.created}>
                <CharacterName>{props.name}</CharacterName>
                <CharacterStats>
                    <CharacterStat><span>Gender</span>{props.gender}</CharacterStat>
                    <CharacterStat><span>Born in</span>{props.birth_year}</CharacterStat>
                    <CharacterStat><span>Eye color</span>{props.eye_color}</CharacterStat>
                    <CharacterStat><span>Hair color</span>{props.hair_color}</CharacterStat>
                    <CharacterStat><span>Height</span>{props.height}cm</CharacterStat>
                    <CharacterStat><span>Mass</span>{props.mass}</CharacterStat>
                    <CharacterStat><span>Skin color</span>{props.skin_color}</CharacterStat>
                </CharacterStats>
            </Character>
    );
};
export default CharacterInfo;