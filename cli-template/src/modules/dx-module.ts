//
// Copyright 2021 DXOS.org
//

import { Argv } from 'yargs';

import { asyncHandler } from '@dxos/cli-core';
import { log } from '@dxos/debug';

export const TemplateModule = () => ({
  command: ['template'],
  describe: 'Template for CLI extension.',
  builder: (yargs: Argv) => yargs

    .command({
      command: ['test'],
      describe: 'Test command.',

      handler: asyncHandler(async () => {
        log('Test cli command.');
      })
    })
});
