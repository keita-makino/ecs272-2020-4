/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Scatter, { Props as ScatterProps } from '../organisms/Scatter';
import Details, { Props as DetailsProps } from '../organisms/Details';
import Parallel, { Props as ParallelProps } from '../organisms/Parallel';

type Props = {
  scatter: ScatterProps;
  details: DetailsProps;
  parallel: ParallelProps;
};

const useStyles = makeStyles({
  visBox: {
    padding: '1rem',
    border: '1px solid #222222',
    boxSizing: 'border-box'
  }
});

const Index: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      {/* grid for scatter */}
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={8}
        xl={8}
        className={classes.visBox}
      >
        <Scatter {...props.scatter} />
      </Grid>

      {/* grid for parallel & detail */}
      <Grid container item xs={12} sm={12} md={12} lg={4} xl={4}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={6}
          lg={12}
          xl={12}
          className={classes.visBox}
        >
          <Parallel targets={props.parallel.targets} />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={6}
          lg={12}
          xl={12}
          className={classes.visBox}
        >
          <Details id={props.details.id} />
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
