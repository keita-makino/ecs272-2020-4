import React from 'react';
import Select from 'react-select';
import { useApolloClient } from '@apollo/react-hooks';

export type Props = {
  domain: string;
  target: string;
};

const options = [
  'Number',
  'Name',
  'Type_1',
  'Type_2',
  'Total',
  'HP',
  'Attack',
  'Defense',
  'Sp_Atk',
  'Sp_Def',
  'Speed',
  'Generation',
  'isLegendary',
  'Color',
  'hasGender',
  'Pr_Male',
  'Egg_Group_1',
  'Egg_Group_2',
  'hasMegaEvolution',
  'Height_m',
  'Weight_kg',
  'Catch_Rate',
  'Body_Style'
].map(item => ({ value: item, label: item }));

const Selector: React.FC<Props> = (props: Props) => {
  const client = useApolloClient();

  const toggle = (option: any) => {
    client.writeData({
      data: {
        [props.domain]: {
          [props.target]: option.value,
          __typename: 'scatter'
        }
      }
    });
    console.log(client.cache, {
      [props.domain]: {
        [props.target]: option.value,
        __typename: 'scatter'
      }
    });
  };

  return (
    <>
      <Select options={options} onChange={toggle} />
    </>
  );
};

export default Selector;
