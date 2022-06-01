import { useState, useEffect } from 'react'
import './App.css';

function App() {
  let [characters, setCharacters] = useState([])
  let [selected, setSelected] = useState(null)

  useEffect(() => {
    async function getCharacters() {
      let response = await fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())

      setCharacters(response.results)
    }
    getCharacters()
  })
  return (
    <div className="App">
      <h1>sup pacmannnnnn2111!</h1>

      <div>
        {selected && (
          <img src={selected.image} />
        )}

      </div>

      <div>
        {characters.map(x => (
          <div key={x.id}>
            <button onClick={() => setSelected(x)}>{x.name}</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
