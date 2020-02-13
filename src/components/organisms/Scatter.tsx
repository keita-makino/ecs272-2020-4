import React from 'react';
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
  const scatterData = useScatterData({
    x: props.x,
    y: props.y
  });

  const onValueClick = (datapoint: any, event: any) => {
    console.log(datapoint);
  };

  return (
    <>
      <Grid item container>
        <XYPlot width={600} height={360}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeries data={scatterData} onValueClick={onValueClick} />
        </XYPlot>
        <SelectorPanel target={'x'} />
        <SelectorPanel target={'y'} />
        <SelectorPanel target={'z'} />
      </Grid>
    </>
  );
};

export default Scatter;
