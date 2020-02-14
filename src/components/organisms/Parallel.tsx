import React from 'react';
import { XYPlot, LineSeries, DecorativeAxis } from 'react-vis';
import useParallelData from '../uses/useParallelData';
import SelectorPanel from '../molecules/SelectorPanel';
import { Grid } from '@material-ui/core';
import useColor from '../uses/useColor';

export type Props = { targets: { position: number; name: string }[] };

const Parallel: React.FC<Props> = (props: Props) => {
  const [parallelData, domains] = useParallelData({
    targets: props.targets
  });

  const colors = useColor();

  return (
    <>
      <Grid item container>
        {Array(6)
          .fill(0)
          .map((_i, index) => (
            <SelectorPanel
              domain={'parallel'}
              target={`axis ${index + 1}`}
              value={props.targets[index]?.name}
              position={index}
            />
          ))}
      </Grid>
      <XYPlot width={600} height={600} xType="ordinal">
        {parallelData !== undefined
          ? parallelData!.map(
              (
                item:
                  | (any[] | import('react-vis').LineSeriesPoint)[]
                  | undefined,
                index: React.ReactText
              ) => {
                return (
                  <LineSeries data={item} color={colors[index]} opacity={0.2} />
                );
              }
            )
          : null}
        {parallelData !== undefined
          ? parallelData![0].map((item: { x: React.ReactText }, index: any) => {
              return (
                <DecorativeAxis
                  key={`${index}-axis`}
                  axisStart={{ x: item.x, y: 0 }}
                  axisEnd={{ x: item.x, y: 1 }}
                  axisDomain={[domains![item.x][0], domains![item.x][1]]}
                />
              );
            })
          : null}
      </XYPlot>
    </>
  );
};

export default Parallel;
