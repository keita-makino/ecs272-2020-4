import React, { useState, useEffect } from 'react';
import { Pokemon } from '../../consts/Pokemon';
import data from '../../data/data.json';
import { MarkSeriesPoint, LineSeriesPoint } from 'react-vis';

type Props = { targets: string[] };

const useParallelData = (props: Props) => {
  const [parallelData, setParallelData] = useState<
    LineSeriesPoint[][] | undefined
  >(undefined);

  useEffect(() => {
    if (props.targets !== undefined) {
      const targets = props.targets;
      const domains: Record<string, any> = targets.reduce((prev, curr) => {
        const array = data.map(item => item[curr as keyof Pokemon]) as number[];
        return {
          ...prev,
          [curr]: [Math.min(...array), Math.max(...array) - Math.min(...array)]
        };
      }, {});

      setParallelData(
        data.map(item => {
          return targets.reduce((prev, curr) => {
            return [
              ...prev,
              {
                x: curr,
                y:
                  ((item[curr as keyof Pokemon] as number) - domains[curr][0]) /
                  domains[curr][1]
              }
            ];
          }, [] as LineSeriesPoint[]);
        })
      );
    }
  }, [props.targets]);

  return parallelData;
};

export default useParallelData;
