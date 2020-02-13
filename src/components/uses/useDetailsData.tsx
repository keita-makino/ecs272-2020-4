import { useState, useEffect } from 'react';
import { Pokemon } from '../../consts/Pokemon';
import data from '../../data/data.json';

type Props = { name?: string };

const useDetailsData = (props: Props) => {
  const [detailsData, setDetailsData] = useState<Pokemon | undefined>(
    undefined
  );

  useEffect(() => {
    if (props.name !== undefined) {
      setDetailsData(data.find(item => item.Name === props.name));
    }
  }, [props.name]);

  return detailsData;
};

export default useDetailsData;
