import buble from "@rollup/plugin-buble";
import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript";
import { uglify } from "rollup-plugin-uglify";
import size from "rollup-plugin-bundle-size";
import path from "path";

const resolvePath = (filePath) => path.resolve(__dirname, filePath);

export default {
  input: "src/index.ts", // 入口文件
  output: {
    // 输出 options
    name: "FrontUtils",
    file: resolvePath("dist/front-utils.min.js"),
    format: "umd", // 输出格式
  },
  plugins: [
    resolve(),
    typescript(),
    commonjs({ extensions: [".js", ".ts"] }),
    buble(),
    uglify(),
    size(),
  ],
};
