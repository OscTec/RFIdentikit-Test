import run from '@rollup/plugin-run';
import {babel} from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

const production = process.env.NODE_ENV === 'production'

export default {
  input: 'src/main.js',
  output: {
    file: 'prod/bundle.js',
    format: 'cjs'
  },
	plugins: [
		run(),
		babel({ babelHelpers: 'bundled' }),
		(production && terser())
	]
};
