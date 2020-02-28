import React from 'react';
import { AppBar, Grid, Typography, Hidden } from '@material-ui/core';
import classes from '*.module.css';

type Props = {};

const Header: React.FC<Props> = (props: Props) => {
  return (
    <AppBar position="sticky">
      <Grid
        container
        justify={'space-between'}
        alignContent={'center'}
        alignItems={'center'}
        style={{ backgroundColor: '#002855', height: '4rem' }}
      >
        <Hidden mdDown>
          <Typography variant="h6" style={{ margin: '1rem 3rem' }}>
            ECS272-2020 Assignment 4
          </Typography>
        </Hidden>
        <Typography variant="h4" style={{ margin: '0 3rem' }}>
          Po-K-Means
        </Typography>
        <Hidden mdDown>
          <Typography variant="body1" style={{ margin: '1rem 3rem' }}>
            Keita Makino, Alice Dagmar Helena Lundvall
          </Typography>
        </Hidden>
      </Grid>
    </AppBar>
  );
};

export default Header;
