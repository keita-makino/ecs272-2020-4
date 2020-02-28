import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Selector from '../atoms/Selector';
import { Props as SelectorProps } from '../atoms/Selector';
import Search from '../atoms/Search';

type Props = {
  selectors: SelectorProps[];
  width:
    | boolean
    | 'auto'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
  search?: boolean;
};

const SelectorPanel: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
        {props.selectors.map(item => (
          <Grid
            item
            xs={props.width}
            sm={props.width}
            md={props.width}
            lg={props.width}
            xl={props.width}
            alignItems={'baseline'}
            style={{ padding: '0.5rem 1rem' }}
          >
            <Typography
              variant={'body1'}
              align={'left'}
              style={{ paddingLeft: '0.5rem' }}
            >
              {item.target}
            </Typography>
            {props.search ? <Search {...item} /> : <Selector {...item} />}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SelectorPanel;
