//
// Copyright 2021 DXOS.org
//

import React from 'react';

import { Box } from '@mui/material';

// TODO(burdon): Use frame context, client, party, etc.
export const Main = () => {
  return (
    <Box sx={{
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box>
        TEMPLATE FRAME
      </Box>
    </Box>
  );
};
