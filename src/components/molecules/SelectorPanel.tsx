import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Selector from '../atoms/Selector';
import { Props as SelectorProps } from '../atoms/Selector';

type Props = SelectorProps;

const SelectorPanel: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant={'body1'}>{props.target}</Typography>
        <Selector domain={props.domain} target={props.target} />
      </Grid>
    </>
  );
};

export default SelectorPanel;
