import React from 'react';

function PokemonDetail({singlePokemon, pokemonId}) {
    let content;
    if (Object.keys(pokemonId).length > 0) {
        content = (
            <div>
                <h1>DATA:</h1>
                <h2>Name:{singlePokemon.name}</h2>
                <h3>Height:{singlePokemon.height}</h3>
                <h3>Weight:{singlePokemon.weight}</h3> 
                <img src={singlePokemon.sprites.front_default} alt="" />
            </div> 
        )
    } else {
        content = <p>No Pokemon selected</p>
    }
    return (
        <>
            {content}
        </>
    );     
}

export default PokemonDetail;




