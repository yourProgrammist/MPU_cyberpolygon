// material-ui
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Импортируем компонент Link для маршрутизации

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Sample Card">
    <Typography variant="body2">
    <Button component={Link} to="/free" variant="contained" color="primary">
        Газовая промышленность
      </Button>
    </Typography>
  </MainCard>
);

export default SamplePage;
