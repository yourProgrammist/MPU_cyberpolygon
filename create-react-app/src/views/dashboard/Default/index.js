// import { useEffect, useState } from 'react';

// material-ui
//import { Grid } from '@mui/material';

import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    <MainCard title="КиберПолигон">
      <Typography variant="body2">
        КиберПолигон – высокопроизводительная лаборатория для исследования программных продуктов и оборудования - используемых и планируемых
        к использованию. Любой продукт может быть проанализирован на предмет уязвимостей и незадекларированных возможностей с использованием
        самых современных технологий и методов
      </Typography>
    </MainCard>
  );
};

export default Dashboard;
