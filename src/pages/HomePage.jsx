import React from 'react';
import { Box } from '@mui/material';

import BackGroundImg
  from '../images/Stanyslav_Cherniakov_background_for_contact_book_app_in_modern__a47f0727-d336-42c5-8f26-10597a5d32c7.png';

export const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackGroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
    </Box>
  );
};


