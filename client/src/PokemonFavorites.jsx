import React from 'react';

function PokemonFavorites({newPokemonFavs, favorites}) {
    let content;
    content = favorites.map((pokemon, id) => {
        return (
                    <p key={id}>{pokemon}</p>
            )
    })
    console.log(favorites)
    return (
        <>
        <div id="fave-box">
            {content}
        </div>
        </>
    )
}

export default PokemonFavorites;