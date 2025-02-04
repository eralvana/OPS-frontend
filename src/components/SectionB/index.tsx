import * as React from 'react';
import Grid from '@mui/material/Grid';

import Header from '../Header';
import Body from './Body';

const SectionB = () => (
  <Grid container>
    <Grid item xs={12}>
      <Header text="Sección B: Otra información médica" />
    </Grid>
    <Grid item xs={12}>
      <Body />
    </Grid>
  </Grid>
);

export default SectionB;
