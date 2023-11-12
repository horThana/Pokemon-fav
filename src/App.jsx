import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [poke, setPoke] = useState( [] );
  const [loading, setloading] = useState(false); // พอเเรา se fetch ค้อยเปลี่ยนเป็น true
  const [error, setError] = useState();

 
  useEffect(() => {

      let abortController = new AbortController();

      const loadPokemon = async () => {
        try{

          setloading(true);
          const res = axios.get(`https://pokeapi.co/api/v2/pokemon/1`,{
            signal: abortController.signal
        });

        setPoke(res.data.json());
        setError();

        }catch(error){
            console.log('Server Error not working')
            setError('Server Error')
        }finally{
          setloading(false);
        }
      }
      loadPokemon();
          return () => {
            abortController.abort();
          };
  }, []);

  
  
  return (
    <>
      
    </>
  )
}

export default App
