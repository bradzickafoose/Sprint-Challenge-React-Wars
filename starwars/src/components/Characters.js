import React from "react";
import Character from "./Character";

const Characters = ({ characters = [] }) => {
    return (
        <section className="characters">
            {characters.map(character => (
                <Character key={character.created} {...character} />
            ))}
        </section>
    );
};

export default Characters;
