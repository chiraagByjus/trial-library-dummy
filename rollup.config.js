import styles from "rollup-plugin-styles";
const autoprefixer = require("autoprefixer");
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";
import image from "@rollup/plugin-image";
import commonjs from "@rollup/plugin-commonjs";

// the entry point for the library
const input = "index.js";
const D3_WARNING = /Circular dependency.*d3-interpolate/;

var config = [
  {
    onwarn: function (message) {
      if (D3_WARNING.test(message)) {
        return;
      }
    },
    input: input,
    output: {
      // then name of your package
      name: "react-library",
      file: `dist/index.cjs.js`,
      format: "cjs",
      exports: "auto",
    },
    // this externelizes react to prevent rollup from compiling it
    external: ["react", "react-dom", /@babel\/runtime/, "prop-types"],
    plugins: [
      commonjs({
        include: /node_modules/,
      }),
      nodeResolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      image(),
      sourcemaps(),
      // these are babel configurations
      babel({
        exclude: "node_modules/**",
        plugins: ["@babel/transform-runtime"],
        babelHelpers: "runtime",
      }),
      // this adds support for styles
      styles({
        postcss: {
          plugins: [autoprefixer()],
        },
      }),
    ],
  },
];

export default [...config];
