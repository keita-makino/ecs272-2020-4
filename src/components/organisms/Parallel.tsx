import React from 'react';
import { XYPlot, LineSeries, DecorativeAxis } from 'react-vis';

type Props = {};

const Parallel: React.FC<Props> = (props: Props) => {
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
