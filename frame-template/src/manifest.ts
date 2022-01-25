//
// Copyright 2021 DXOS.org
//

import { createFrame, FrameManifest } from '@dxos/react-framekit';

import { Main } from './Main';

export const manifest: FrameManifest = {
  component: createFrame(Main)
};
