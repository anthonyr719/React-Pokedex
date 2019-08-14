import React from 'react';

function PokemonList({pokemon, handlePokemonDetail, addToFavorites}) {
    let content;
        content = pokemon.map((pokemon, id) => {
            return (
                <div key={id}>
                    <button onClick={()=>addToFavorites(pokemon.name)} type="submit">Add to Favorites</button>
                    <p onClick={()=>handlePokemonDetail(pokemon.name)}>{pokemon.name}</p>
                    {/* <button onClick={() => addToFavorites(pokemon)}>{pokemon.name}</button> */}
                </div>

        )
    })

    return (
        <div className="App">
            {content}
        </div>
    );
}

export default PokemonList;