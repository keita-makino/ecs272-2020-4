import React from 'react';
import {
  XYPlot,
  XAxis,
  MarkSeries,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines
} from 'react-vis';

export type Props = {
  title: string;
  data: { x: number; y: number; size: number }[];
};

const Scatter: React.FC<Props> = (props: Props) => {
  console.log(props);
  return (
    <>
      <XYPlot width={600} height={360}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries data={props.data} />
      </XYPlot>
    </>
  );
};

export default Scatter;
