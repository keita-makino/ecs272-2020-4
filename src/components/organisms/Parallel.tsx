import React, { useRef, useState, useEffect } from 'react';
import {
  XYPlot,
  LineSeries,
  DecorativeAxis,
  LabelSeries,
  LineSeriesPoint
} from 'react-vis';
import useParallelData from '../uses/useParallelData';
import SelectorPanel from '../molecules/SelectorPanel';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import useColor from '../uses/useColor';
import useHighlight from '../uses/useHighlight';
import { useWindowSize } from 'react-use';

export type Props = {
  targets: { position: number; name: string }[];
};

const useStyles = makeStyles({
  selectorPanel: {
    height: 'calc(35vh - 1.4rem - 9.6px)'
  },
  parallel: {
    height: 'calc(65vh - 2.6rem - 22.4px)'
  }
});

const Parallel: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [parallelData, domains] = useParallelData({
    targets: props.targets
  });

  const ref = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const colors = useColor();
  const windowSize = useWindowSize();
  const highlight = useHighlight();

  useEffect(() => {
    setContainerSize({
      width: ref.current!.getBoundingClientRect().width,
      height: ref.current!.getBoundingClientRect().height
    });
  }, [windowSize]);

  return (
    <Grid
      item
      container
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      className={'component'}
      alignContent={'space-around'}
    >
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        alignContent={'space-around'}
        justify={'center'}
        className={classes.selectorPanel}
      >
        <SelectorPanel
          width={6}
          selectors={Array(6)
            .fill(0)
            .map((item: any, index: number) => ({
              domain: 'parallel',
              target: `Axis ${index + 1}`,
              value: props.targets[index]?.name,
              position: index
            }))}
        />
        {colors === null ? (
          <Typography variant={'body1'} color={'error'} align={'center'}>
            Clustering is not enabled as one or more variables in the scatter
            plot are discrete.
          </Typography>
        ) : null}
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        ref={ref}
        className={classes.parallel}
        justify={'center'}
      >
        <XYPlot
          width={containerSize.width * 0.9}
          height={containerSize.height}
          xType="ordinal"
          margin={{ top: 15, left: 0, bottom: 15, right: 0 }}
        >
          {parallelData !== undefined
            ? [
                parallelData!.map((item: LineSeriesPoint[], index: number) => {
                  return highlight !== index + 1 ? (
                    <LineSeries
                      data={item}
                      color={colors ? colors[index] : '#12939a'}
                      opacity={0.125}
                    />
                  ) : null;
                }),
                parallelData!
                  .filter((item: any, index: number) => highlight === index + 1)
                  .map((item: LineSeriesPoint[], index: number) => {
                    return highlight !== index + 1 ? (
                      <LineSeries data={item} color={'#222222'} opacity={1} />
                    ) : null;
                  })
              ]
            : null}
          {parallelData !== undefined
            ? parallelData![0].map(
                (item: { x: React.ReactText }, index: any) => {
                  const isNumeric = Number(domains![item.x][0]);
                  return [
                    [
                      <DecorativeAxis
                        axisStart={{ x: item.x, y: 0 }}
                        axisEnd={{ x: item.x, y: 1 }}
                        axisDomain={isNumeric ? domains![item.x] : [0, 1]}
                        tickValue={
                          isNumeric
                            ? undefined
                            : (v: any) =>
                                domains![item.x][
                                  Math.round(v * (domains![item.x].length - 1))
                                ]
                        }
                        numberOfTicks={
                          isNumeric ? undefined : domains![item.x].length - 1
                        }
                      />,
                      <LabelSeries
                        data={[
                          {
                            x: item.x,
                            y: -0.04,
                            label: item.x.toString(),
                            style: { fontSize: 14 }
                          }
                        ]}
                      />
                    ]
                  ];
                }
              )
            : null}
        </XYPlot>
      </Grid>
    </Grid>
  );
};

export default Parallel;
