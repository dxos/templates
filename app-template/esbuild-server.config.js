const { NodeGlobalsPolyfillPlugin, FixMemdownPlugin, NodeModulesPlugin } = require('@dxos/esbuild-plugins');
// TODO(wittjosiah): Fix this path once its exported properly.
const { ConfigPlugin } = require('@dxos/config/dist/src/esbuild-plugin');

module.exports = {
  overrides: {
    sourcemap: true
  },
  entryPoints: [
    'src/App.tsx'
  ],
  plugins: [
    NodeGlobalsPolyfillPlugin(),
    FixMemdownPlugin(),
    NodeModulesPlugin(),
    ConfigPlugin()
  ],
  outdir: 'out',
  staticDir: 'public'
};
