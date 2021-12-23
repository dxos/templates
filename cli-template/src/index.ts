//
// Copyright 2021 DXOS.org
//

import { readFileSync } from 'fs';
import path from 'path';

import { createCLI } from '@dxos/cli-core';

import { TemplateModule } from './modules/dx-module';

module.exports = createCLI({
  modules: [TemplateModule],
  dir: __dirname,
  main: !module.parent,
  info: readFileSync(path.join(__dirname, '../extension.yml')).toString()
});
