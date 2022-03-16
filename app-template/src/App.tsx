//
// Copyright 2021 DXOS.org
//

import React from 'react';

import { configProvider } from '@dxos/client';
import { AppInitializer } from '@dxos/react-appkit';

export const App = () => {
  return (
    <AppInitializer config={configProvider}>
      Welcome to DXOS!
    </AppInitializer>
  );
};
