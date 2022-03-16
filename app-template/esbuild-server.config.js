const { NodeGlobalsPolyfillPlugin, FixMemdownPlugin, NodeModulesPlugin } = require('@dxos/esbuild-plugins');
const { ConfigPlugin } = require('@dxos/config/esbuild-plugin');

module.exports = {
  entryPoints: [
    'src/main.tsx'
  ],
  outdir: 'out/app',
  staticDir: 'public',
  plugins: [
    NodeGlobalsPolyfillPlugin(),
    FixMemdownPlugin(),
    NodeModulesPlugin(),
    ConfigPlugin()
  ],
  overrides: {
    sourcemap: true
  }
};
