import React, { useEffect, useRef, useState } from 'react';
import {
  XYPlot,
  XAxis,
  MarkSeries,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  MarkSeriesPoint,
  Hint
} from 'react-vis';
import useScatterData from '../uses/useScatterData';
import SelectorPanel from '../molecules/SelectorPanel';
import { Grid, Typography } from '@material-ui/core';
import { useApolloClient } from '@apollo/react-hooks';
import SliderPanel from '../molecules/SliderPanel';
import { useWindowSize } from 'react-use';
import useHighlight from '../uses/useHighlight';

export type Props = {
  title: string;
  x?: string;
  y?: string;
  k: number;
};

type ToolTip = {
  id: number;
  x: number;
  y: number;
  name: string;
};

const Scatter: React.FC<Props> = (props: Props) => {
  const client = useApolloClient();

  const ref = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const highlight = useHighlight();
  const scatterData = useScatterData({
    x: props.x,
    y: props.y,
    k: props.k
  })?.map(item => ({
    ...item,
    color: item.id === highlight ? '#222222' : item.color,
    opacity: item.id === highlight ? 1 : 0.25
  }));

  const tickValues =
    scatterData !== undefined
      ? {
          x:
            typeof scatterData[0].x !== 'number'
              ? [...Array.from(new Set(scatterData.map(item => item.x)))]
              : undefined,
          y:
            typeof scatterData[0].y !== 'number'
              ? [...Array.from(new Set(scatterData.map(item => item.y)))]
              : undefined
        }
      : { x: undefined, y: undefined };

  const [tooltip, setTooltip] = useState<ToolTip | undefined>(undefined);

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
  };

  const windowSize = useWindowSize();

  const onMouseOver = (node: any, event: any) => {
    setTooltip({ x: node.x, y: node.y, id: node.id, name: node.name });
  };
  const onMouseOut = (node: any, event: any) => {
    setTooltip(undefined);
  };
  useEffect(() => {
    setContainerSize({
      width: ref.current!.getBoundingClientRect().width,
      height: ref.current!.getBoundingClientRect().height
    });
  }, [windowSize]);

  return (
    <Grid
      container
      item
      ref={ref}
      className={'component'}
      alignContent={'center'}
    >
      <Grid container item xs={12} sm={12} md={8} lg={8} xl={8}>
        {scatterData !== undefined ? (
          <XYPlot
            width={containerSize.width / (windowSize.width > 959 ? 1.55 : 1.1)}
            height={
              containerSize.height * (windowSize.width > 959 ? 0.78 : 0.5)
            }
            xType={tickValues.x !== undefined ? 'ordinal' : undefined}
            yType={tickValues.y !== undefined ? 'ordinal' : undefined}
            margin={{
              left: tickValues.y !== undefined ? 85 : 40,
              bottom: tickValues.x !== undefined ? 80 : 40
            }}
          >
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis
              title={props.x}
              tickValues={tickValues.x}
              tickLabelAngle={tickValues.x !== undefined ? -45 : undefined}
            />
            <YAxis title={props.y} tickValues={tickValues.y} />
            <MarkSeries
              data={scatterData.filter(item => item.opacity !== 1)}
              onValueClick={onValueClick}
              strokeWidth={0.01}
              colorType="literal"
              onValueMouseOver={onMouseOver}
              onValueMouseOut={onMouseOut}
            />
            <MarkSeries
              data={scatterData.filter(item => item.opacity === 1)}
              onValueClick={onValueClick}
              strokeWidth={0.01}
              colorType="literal"
              onValueMouseOver={onMouseOver}
              onValueMouseOut={onMouseOut}
            />
            {tooltip !== undefined ? <Hint value={tooltip} /> : null}
          </XYPlot>
        ) : (
          <Typography>'Please select axes'</Typography>
        )}
      </Grid>

      <Grid
        container
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        justify="center"
        alignItems="center"
      >
        <SelectorPanel
          width={12}
          selectors={[
            {
              domain: 'scatter',
              target: 'Search'
            }
          ]}
          search
        />
        <SelectorPanel
          width={12}
          selectors={['x', 'y'].map((item: any, index: number) => ({
            domain: 'scatter',
            target: item,
            value: index === 0 ? props.x : props.y
          }))}
        />
        <SliderPanel initial={2} />
        {tickValues.x !== undefined || tickValues.y !== undefined ? (
          <Typography variant={'body1'} color={'error'} align={'center'}>
            Clustering is not enabled as one or more variables are discrete.
          </Typography>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Scatter;
