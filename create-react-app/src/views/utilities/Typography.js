import { Grid } from '@mui/material';
import myImage from '../../assets/images/owasp.png';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => (
  <MainCard title="OWASP Juice Shop" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
    <Grid container spacing={gridSpacing}>
      <img src={myImage} alt="description" width="500" height="500"/>;
    </Grid>
  </MainCard>
);

export default Typography;
