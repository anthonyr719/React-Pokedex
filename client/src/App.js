import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import PokemonFavorites from './PokemonFavorites';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonId, setPokemonId] = useState(1)
  const [singlePokemon, setSinglePokemon] = useState({})
  const [favorites, setFavorites]  = useState([])
  // const [pokemonList, setPokemon] = useState([])
  // const [pokemonDetail, setPokemonDetail] = useState({})
  const addToFavorites = (pokemon) => {
    const newPokemonFavs = [...favorites, pokemon]
    setFavorites(newPokemonFavs);
    // const NewPokemonList = singlePokemon.filter(pokemonSlot => pokemonSlot.name !== pokemon.name)
    // setPokemon(NewPokemonList)
  }
  useEffect( () => {
    console.log("Running the first effect")
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then( (response) => {
      setPokemon(response.data.results);
      console.log(response.data.results)
    })
  }, [])

  useEffect( () => {
    console.log("Running the second effect")
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then( (response) => {
      setSinglePokemon(response.data);
    })
  }, [pokemonId])

  return (
    <>
    <section className="list">
      POKEMON:
      <PokemonList pokemon={pokemon} addToFavorites={addToFavorites} handlePokemonDetail={setPokemonId}  />
    </section>
    <aside classname='favs'>
      DATA:
      <PokemonDetail singlePokemon={singlePokemon} pokemonId={pokemonId}/>
      FAVORITES:
      <br/>
      <PokemonFavorites favorites={favorites}/>
    </aside>
    </>
  );
}

export default App;
