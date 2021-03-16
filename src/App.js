
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Poke from './commpenent/poke/poke';
import Navbar from './commpenent/header /navbar';
import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';


import { getAllPokemon, getPokemon } from './commpenent/service/pokemon';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const initialURL = 'https://pokeapi.co/api/v2/pokemon';



  useEffect(() => {
    async function fetchDate() {
      let response = await getAllPokemon(initialURL);

      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      console.log(response)
      setLoading(false);

    }
    fetchDate();
  }, []);

 const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    console.log(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }
  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      } ) )
    setPokemonData(_pokemonData);
  }

  console.log(pokemonData);

  return (
    <div className="App">
      <Navbar />

      {loading ? ( <div className="text-center my-4">
      <Spinner animation="border" variant="danger"/> 
      <h1 >Loading</h1>
      </div> 
      ) : (

        <div className="text-center my-4">
          <button className="btn btn-dark border  " onClick={prev}> prev</button>
          <button className="btn btn-dark border" onClick={next}> next</button>
          { pokemonData.map((pokemon, i) => {
            return <Poke key={i} pokemon={pokemon} />

          })}
        </div>
      )}
    </div>

  );
}

export default App;
