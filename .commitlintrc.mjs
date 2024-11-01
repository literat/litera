export default {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit.includes('[ci-skip]')],
};
