import React from 'react';
import { XYPlot, LineSeries, DecorativeAxis } from 'react-vis';
import useParallelData from '../uses/useParallelData';

export type Props = { targets: string[] };

const Parallel: React.FC<Props> = (props: Props) => {
  const parallelData = useParallelData({ targets: props.targets });

  return (
    <>
      <XYPlot width={600} height={600} xType="ordinal">
        {parallelData !== undefined
          ? parallelData!.map(item => (
              <LineSeries data={item} color={'#873322'} />
            ))
          : null}
      </XYPlot>
    </>
  );
};

export default Parallel;
