import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

/** @type {import('rollup').RollupOptions} */
const option = {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', exports: 'named' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [typescript()],
  external: ['react'],
};

export default option;
