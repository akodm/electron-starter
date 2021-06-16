const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/stories/**/*.@(tsx|ts|jsx|js|)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-postcss"
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

    return config;
  },
}