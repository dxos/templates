const {
  FixMemdownPlugin,
  NodeGlobalsPolyfillPlugin,
  NodeModulesPlugin
} = require('@dxos/esbuild-plugins');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

module.exports = {
  entryPoints: ['src/manifest.ts'],
  outdir: 'out/app/__frame__',
  plugins: [
    NodeGlobalsPolyfillPlugin(),
    FixMemdownPlugin(),
    NodeModulesPlugin(),
    ...(process.env.FRAME ? [
      nodeExternalsPlugin({
        allowList: []
      })
    ] : [])
  ],
  overrides: {
    format: process.env.FRAME ? 'cjs' : 'iife',
    sourcemap: true
  }
};
