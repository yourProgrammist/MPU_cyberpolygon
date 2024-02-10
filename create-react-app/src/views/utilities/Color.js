
// material-ui
import {Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===============================|| COLOR BOX ||=============================== //


// ===============================|| UI COLOR ||=============================== //

const UIColor = () => (
  <MainCard title="SIQULE FORM">
    <Grid container spacing={gridSpacing}>
      <h1>description</h1>
    </Grid>
  </MainCard>
);

export default UIColor;
