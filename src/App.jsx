import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch Pokémon list.');
        return res.json();
      })
      .then((data) => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSelectPokemon = (url) => {
    setDetailLoading(true);
    setError(null);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load Pokémon details.');
        return res.json();
      })
      .then((data) => {
        setSelectedPokemon(data);
        setDetailLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setDetailLoading(false);
      });
  };

  if (loading) return <div className="message">Loading Pokédex...</div>;
  if (error && pokemonList.length === 0) return <div className="message error">Error: {error}</div>;

  return (
    <div className="container">
      <h1>Pokédex App</h1>
      <div className="pokedex-layout">
        <div className="pokemon-list">
          {pokemonList.map((poke, index) => (
            <div key={poke.name} className="pokemon-card" onClick={() => handleSelectPokemon(poke.url)}>
              <strong>#{index + 1}</strong>
              <p>{poke.name}</p>
            </div>
          ))}
        </div>
        <div className="pokemon-detail">
          {detailLoading && <div className="message">Loading entry details...</div>}
          {!detailLoading && !selectedPokemon && (
            <div className="message">Select a Pokémon from the list to view stats.</div>
          )}
          {!detailLoading && selectedPokemon && (
            <div>
              <h2 className="detail-header">{selectedPokemon.name} (ID: {selectedPokemon.id})</h2>
              <img className="detail-img" src={selectedPokemon.sprites.front_default || 'https://via.placeholder.com/150'} alt={selectedPokemon.name} />
              <div>
                <h3>Types</h3>
                {selectedPokemon.types.map(t => <span key={t.type.name} className="badge type">{t.type.name}</span>)}
              </div>
              <div>
                <h3>Abilities</h3>
                {selectedPokemon.abilities.map(a => <span key={a.ability.name} className="badge ability">{a.ability.name}</span>)}
              </div>
              <div className="stats-container">
                <h3>Base Stats</h3>
                {selectedPokemon.stats.map(s => (
                  <div key={s.stat.name} className="stat-row">
                    <span>{s.stat.name}</span>
                    <strong>{s.base_stat}</strong>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;