//
// Copyright 2022 DXOS.org
//

import { ObjectModel } from '@dxos/object-model';
import { createFrame, FrameManifest } from '@dxos/react-framekit';

import { Main } from './Main';

export const manifest: FrameManifest = {
  component: createFrame(Main),

  register: async (client) => {
    await client.registerModel(ObjectModel);
  },

  createRootItem: async (party, props) => {
    const item = await party.database.createItem({
      model: ObjectModel,
      type: 'example:task-list',
      props
    });

    return item;
  }
};
