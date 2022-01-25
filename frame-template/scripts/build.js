//
// Copyright 2021 DXOS.org
//

const { build } = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const fs = require('fs').promises;

const {
  NodeGlobalsPolyfillPlugin,
  FixMemdownPlugin,
  FixGracefulFsPlugin,
  NodeModulesPlugin
} = require('@dxos/esbuild-plugins');

const run = async () => {
  const result = await build({
    entryPoints: ['./src/manifest.ts'],
    write: true,
    bundle: true,
    metafile: true,
    platform: 'browser',
    format: 'cjs',
    sourcemap: 'external',
    outfile: './out/main.js',
    plugins: [
      NodeModulesPlugin(),
      NodeGlobalsPolyfillPlugin(),
      FixMemdownPlugin(),
      FixGracefulFsPlugin(),
      nodeExternalsPlugin({
        allowList: []
      })
    ],
  });
  // TODO(burdon): Write to dist?
  await fs.writeFile('./out/meta.json', JSON.stringify(result.metafile));
};

void run().catch(() => process.exit(1));
