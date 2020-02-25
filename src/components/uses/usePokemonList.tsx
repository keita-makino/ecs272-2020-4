import { useState, useEffect } from 'react';
import { Pokemon } from '../../consts/Pokemon';
import data from '../../data/data.json';

const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<
    { id: number; name: string }[] | undefined
  >([]);

  useEffect(() => {
    setPokemonList(data.map(item => ({ id: item.Number, name: item.Name })));
  }, []);

  return pokemonList;
};

export default usePokemonList;
