import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [poke, setPoke] = useState({});
  const [loading, setloading] = useState(false);
  const [error, setError] = useState('');
  const [seach, setSearch] = useState('1');
  const [fav, setFav] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    const loadPokemon = async () => {
      try {
        setloading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${seach}`, {
          signal: abortController.signal,
        });

        setPoke(response.data);
        setError('');
      } catch (error) {
        setError('Server Error not working', error);
      } finally {
        setloading(false);
      }
    };

    loadPokemon();

    return () => {
      abortController.abort();
    };
  }, [seach]); /// เพื่อให้มันรีเฟรชเวลาเปลี่ยนค่า

  console.log(poke);

/// สร้างปุ่ที่เปลี่ยนค่าได้
const prevPokemon = () => {
  setSearch((search) => search -1);
};

const nextPokemon = () => {
  setSearch((search) => Number(search)+1);
};

  console.log('Pokemon ID:', seach);

  const addfavrorite = () => {
    setFav((oldState) => [...oldState, poke])
  }
  console.log(fav);

  return (
    <>
     <h1>{poke?.name}</h1>
     <button onClick={addfavrorite}>Add Favorite</button>
     <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.name}></img>
     <ul>
        {poke?.abilities?.map((abilites, indedx) => {
          return <li key={indedx}>{abilites.ability.name}</li>;
        })}
     </ul>
     <button onClick={prevPokemon}>Prevet</button>
     <button onClick={nextPokemon}>Next</button>
    </>
  );
}

export default App;
