import React from 'react';
import { XYPlot, LineSeries, DecorativeAxis } from 'react-vis';
import useParallelData from '../uses/useParallelData';

type Props = { targets: string[] };

const Parallel: React.FC<Props> = (props: Props) => {
  const parallelData = useParallelData({ targets: props.targets });

  return (
    <>
      <XYPlot width={600} height={600} xType="ordinal">
        {/* {mappedData.map((series, index) => {
          return <LineSeries data={series} key={`series-${index}`} />;
        })}
        {mappedData[0].map((cell, index) => {
          return (
            <DecorativeAxis
              key={`${index}-axis`}
              axisStart={{ x: cell.x, y: 0 }}
              axisEnd={{ x: cell.x, y: 1 }}
              axisDomain={[domains[cell.x].min, domains[cell.x].max]}
            />
          );
        })} */}
      </XYPlot>
    </>
  );
};

export default Parallel;
