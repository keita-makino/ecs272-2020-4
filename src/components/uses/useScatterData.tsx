import React, { useState, useEffect } from 'react';
import { Pokemon } from '../../consts/Pokemon';
import data from '../../data/data.json';
import { MarkSeriesPoint } from 'react-vis';
import clustering from '../../utils/clustering';

type Props = { x?: string; y?: string };

const useScatterData = (props: Props) => {
  const [scatterData, setScatterData] = useState<MarkSeriesPoint[]>([]);

  useEffect(() => {
    if (props.x !== null && props.y !== null) {
      const array = data.reduce((prev, curr) => {
        const x = curr[props.x! as keyof Pokemon];
        const y = curr[props.y! as keyof Pokemon];
        if (x === null || y === null) return prev;
        return [
          ...prev,
          {
            x: x === false || x === true ? x.toString() : x,
            y: y === false || y === true ? y.toString() : y,
            size: 1
          }
        ];
      }, [] as MarkSeriesPoint[]);
      if (clustering(array) !== undefined) {
        setScatterData(clustering(array)!);
      }
    }
    return undefined;
  }, [props.x, props.y]);

  return scatterData;
};

export default useScatterData;
