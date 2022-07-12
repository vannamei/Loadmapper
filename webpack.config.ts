import path from "node:path";
import { ProvidePlugin, ProgressPlugin, Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const isDev = process.env["NODE_ENV"] === "development";

const fileName = {
  output: isDev ? "[name]" : "[name].[chunkhash]",
  asset: isDev ? "[name]" : "[contenthash]",
};

const config: Configuration = {
  mode: isDev ? "development" : "production",
  entry: {
    main: "./resources/ts/index.tsx",
  },
  output: {
    filename: `js/${fileName.output}.js`,
    path: path.resolve(__dirname, "public"),
    assetModuleFilename: fileName.asset,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: isDev,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      grid: true,
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: `img/${fileName.asset}[ext]`,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/${fileName.output}.css`,
    }),
    new ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      React: "react",
      ReactDOM: "react-dom",
    }),
    new ProgressPlugin(),
  ],
  resolve: {
    alias: {
      "@ts": path.resolve(__dirname, "./resources/ts"),
      "@scss": path.resolve(__dirname, "./resources/scss"),
      "@img": path.resolve(__dirname, "./resources/img"),
    },
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
      ".scss",
      ".sass",
      ".css",
    ],
  },
  target: isDev ? "web" : ["web", "es5"],
  devtool: isDev ? "inline-source-map" : undefined,
};

export default config;
