import prettierConfig from '@lmc-eu/prettier-config';

export default {
  ...prettierConfig,
  printWidth: 80,
  plugins: ['prettier-plugin-toml'],
};
