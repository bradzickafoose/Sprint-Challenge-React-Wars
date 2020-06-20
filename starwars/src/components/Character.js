import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.025);
  }
`;

const Character = styled.article`
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    animation: ${pulse} 0.2s ease-in-out infinite alternate;
    animation-play-state: paused;
    &:hover {
        animation-play-state: running;
    }
`;

const CharacterName = styled.h2`
    margin-top: 0;
    color: #6c4c33;
`;

const CharacterStats = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
`;

const CharacterStat = styled.span`
    color: #937157;
    font-size: 0.8rem;

    span {
        display: block;
        font-weight: bold;
    }
`;

const CharacterInfo = ({
    name,
    gender,
    birth_year,
    eye_color,
    hair_color,
    height,
    mass,
    skin_color,
}) => {
    return (
        <Character>
            <CharacterName>{name}</CharacterName>
            <CharacterStats>
                <CharacterStat>
                    <span>Gender</span>
                    {gender}
                </CharacterStat>
                <CharacterStat>
                    <span>Born in</span>
                    {birth_year}
                </CharacterStat>
                <CharacterStat>
                    <span>Eye color</span>
                    {eye_color}
                </CharacterStat>
                <CharacterStat>
                    <span>Hair color</span>
                    {hair_color}
                </CharacterStat>
                <CharacterStat>
                    <span>Height</span>
                    {height}cm
                </CharacterStat>
                <CharacterStat>
                    <span>Mass</span>
                    {mass}
                </CharacterStat>
                <CharacterStat>
                    <span>Skin color</span>
                    {skin_color}
                </CharacterStat>
            </CharacterStats>
        </Character>
    );
};
export default CharacterInfo;
