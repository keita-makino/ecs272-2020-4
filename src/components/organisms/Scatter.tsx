import React, { useEffect, useRef, useState } from 'react';
import {
  XYPlot,
  XAxis,
  MarkSeries,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  MarkSeriesPoint
} from 'react-vis';
import useScatterData from '../uses/useScatterData';
import SelectorPanel from '../molecules/SelectorPanel';
import { Grid } from '@material-ui/core';

export type Props = {
  title: string;
  x?: string;
  y?: string;
};

const Scatter: React.FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const scatterData = useScatterData({
    x: props.x,
    y: props.y
  });

  const onValueClick = (datapoint: any, event: any) => {
    console.log(datapoint);
  };

  useEffect(() => {
    setContainerSize({
      width: ref.current!.getBoundingClientRect().width,
      height: ref.current!.getBoundingClientRect().height
    });
  });

  return (
    <>
      <Grid container item ref={ref}>
        <Grid container item xs={8} sm={8} md={8} lg={8} xl={8}>
          <XYPlot width={containerSize.width / 1.55} height={600}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <MarkSeries data={scatterData} onValueClick={onValueClick} />
          </XYPlot>
        </Grid>

        <Grid
          container
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          justify="flex-start"
          alignItems="center"
        >
          <SelectorPanel target={'x'} />
          <SelectorPanel target={'y'} />
          <SelectorPanel target={'z'} />
        </Grid>
      </Grid>
    </>
  );
};

export default Scatter;
