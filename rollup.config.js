import vue from 'rollup-plugin-vue'
import pkg from './package.json'
import css from 'rollup-plugin-css-only'
import url from '@rollup/plugin-url'
import image from '@rollup/plugin-image'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const input = 'src/components/index.js'
const plugins = [resolve(), commonjs(), url(), css(), image()]

const esm = {
  input,
  output: {
    format: 'es',
    file: pkg.module,
  },
  external,
  plugins: [...plugins, vue()],
}

const ssr = {
  input,
  output: {
    format: 'cjs',
    file: pkg.main,
  },
  external,
  plugins: [...plugins, vue({ template: { optimizeSSR: true } })],
}

function generageConfig(config) {
  const minConfig = {
    ...config,
  }

  minConfig.output = {
    ...config.output,
    file: config.output.file.replace(/\.js$/i, '.min.js'),
    sourcemap: true,
  }

  minConfig.plugins = [...config.plugins, terser()]

  return [config, minConfig]
}

function external(id) {
  return (
    id in pkg.dependencies ||
    id in pkg.peerDependencies ||
    ['path'].includes(id)
  )
}

export default [...generageConfig(esm), ...generageConfig(ssr)]
