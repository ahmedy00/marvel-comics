module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'prettier'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'prefer-const': ['error', {
      destructuring: 'all',
      ignoreReadBeforeAssign: true,
    }]
  },
}
