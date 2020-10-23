import vue from './rollup-plugin-vue/rollup-plugin-vue.esm';
import pkg from './package.json';
import css from 'rollup-plugin-css-only';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const input = 'src/components/index.js'
const wrapperInput = 'src/components/wrapper.js'
const iifeName = 'bussinessComponent'
const plugins = [resolve(), commonjs(), url(), css(), image()]

function generageConfig(config) {
  const minConfig = {
    ...config
  }

  minConfig.output = {
    ...config.output,
    file: config.output.file.replace(/\.js$/i, '.min.js'),
    sourcemap: true,
  }

  minConfig.plugins = [...config.plugins, terser()]

  return [config, minConfig]
}

const esm = {
  input,
  output: {
    format: 'es',
    file: pkg.module,
  },
  plugins: [...plugins, vue()],
}

const ssr = {
  input,
  output: {
    format: 'cjs',
    file: pkg.main,
  },
  plugins: [...plugins, vue({ template: { optimizeSSR: true } })],
}

const browser = {
  input: wrapperInput,
  output: {
    format: 'iife',
    file: `dist/${pkg.name}.browser.js`,
    name: iifeName,
  },
  plugins: [...plugins, vue()],
}

export default [
  ...generageConfig(esm),
  ...generageConfig(ssr),
  ...generageConfig(browser),
]
