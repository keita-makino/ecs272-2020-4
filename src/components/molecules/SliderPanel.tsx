import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Slider from '../atoms/Slider';
import { Props as SliderProps } from '../atoms/Slider';

type Props = SliderProps;

const SliderPanel: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        alignItems={'center'}
        style={{ padding: '0.5rem 1rem' }}
      >
        <Typography variant={'body1'} style={{ paddingLeft: '0.5rem' }}>
          k
        </Typography>
        <Slider {...props} />
      </Grid>
    </>
  );
};

export default SliderPanel;
