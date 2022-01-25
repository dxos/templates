//
// Copyright 2021 DXOS.org
//

import React from 'react';

import { TestFrameContainer } from '@dxos/frame-dev-server';
import { ClientProvider } from '@dxos/react-client';
import { FullScreen } from '@dxos/react-components';

import { manifest } from '../src';

export default {
  title: 'template-frame/Frame'
};

export const Primary = () => (
  <ClientProvider>
    <FullScreen>
      <TestFrameContainer manifest={manifest} />
    </FullScreen>
  </ClientProvider>
);
