import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'
export default {
    input: './bin/entry.ts',
    plugins: [
        // bable({
        //     exclude: "node_modules/**",
        // }),
        commonjs(),
        resolve(),
        typescript(),
        babel({
            // 编译库使用 runtime
            babelHelpers: 'runtime',
            // 只转换源代码，不转换外部依赖
            exclude: 'node_modules/**',
            // babel 默认不支持 ts 需要手动添加
            extensions: [
              ...DEFAULT_EXTENSIONS,
              '.ts',
            ],
          }),
    ],
    output: [
        {
            file: 'lib/bundle.cjs.js',
            format: 'cjs'
        },
        {
            format: "es",
            file: "lib/bundle.esm.js",
            sourcemap: true
          }
    ]
  };