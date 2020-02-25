import React from 'react';
import Select from 'react-select';
import { useApolloClient } from '@apollo/react-hooks';
import usePokemonList from '../uses/usePokemonList';

export type Props = {
  domain: string;
  target: string;
  value?: string;
  position?: number;
};

const Search: React.FC<Props> = (props: Props) => {
  const client = useApolloClient();
  const pokemons = usePokemonList();

  const update = (option: any) => {
    client.writeData({
      data: {
        details: {
          title: 'details',
          id: option.value,
          __typename: 'details'
        }
      }
    });
    console.log(client.cache);
  };

  return (
    <>
      <Select
        options={pokemons?.map(item => ({ value: item.id, label: item.name }))}
        onChange={update}
        placeholder={props.value}
      />
    </>
  );
};

export default Search;
