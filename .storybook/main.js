const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/stories/**/*.@(tsx|ts|jsx|js|)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  },
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsConfigPathsPlugin({}));

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
}