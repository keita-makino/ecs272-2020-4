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
import { Grid, Typography } from '@material-ui/core';
import { useApolloClient } from '@apollo/react-hooks';

export type Props = {
  title: string;
  x?: string;
  y?: string;
};

const Scatter: React.FC<Props> = (props: Props) => {
  const client = useApolloClient();

  const ref = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const scatterData = useScatterData({
    x: props.x,
    y: props.y
  });

  const onValueClick = (node: any, event: any) => {
    client.writeData({
      data: {
        details: {
          title: 'details',
          id: node.id,
          __typename: 'details'
        }
      }
    });
    console.log(client);
  };

  useEffect(() => {
    setContainerSize({
      width: ref.current!.getBoundingClientRect().width,
      height: ref.current!.getBoundingClientRect().height
    });
  }, []);

  return (
    <>
      <Grid container item ref={ref}>
        <Grid container item xs={8} sm={8} md={8} lg={8} xl={8}>
          {scatterData !== undefined ? (
            <XYPlot width={containerSize.width / 1.55} height={600}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <XAxis title={props.x} />
              <YAxis title={props.y} />
              <MarkSeries
                data={scatterData}
                onValueClick={onValueClick}
                strokeWidth={0.01}
                colorType="literal"
              />
            </XYPlot>
          ) : (
            <Typography>'Please select axes'</Typography>
          )}
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
          <SelectorPanel domain={'scatter'} target={'x'} />
          <SelectorPanel domain={'scatter'} target={'y'} />
          <SelectorPanel domain={'scatter'} target={'z'} />
        </Grid>
      </Grid>
    </>
  );
};

export default Scatter;
