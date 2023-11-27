require('@rushstack/eslint-patch/modern-module-resolution')

const path = require('node:path')
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    semi: [2, 'never'],
    'quote-props': ['error', 'as-needed'],
    'import/prefer-default-export': ['off'],
    'vue/multi-word-component-names': 0,
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 0,
    'vuejs-accessibility/anchor-has-content': 0,
    'eol-last': 0,
    'vue/comment-directive': 0
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`
    })
  }
}
