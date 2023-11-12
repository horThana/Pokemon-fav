import React from 'react';
import Likepoke from './Likepoke';


const Favpoke = ({ fav }) => {
  return (
    <div className='grid sm:grid-rows-1 md:grid-cols-3 lg:grid-cols-4'>
      {fav.map((pokemon) => (
        <div key={pokemon.id}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className='max-sm:px-44 md:pl-6'/>
          <p>{pokemon.name}</p>
          <Likepoke />
        </div>
      ))}
    </div>
  );
};

export default Favpoke;