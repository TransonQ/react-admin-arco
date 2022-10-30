module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    camelcase: 0, // 双峰驼命名格式
    eqeqeq: 2, // 必须使用全等
    'react/react-in-jsx-scope': 0,
    'func-names': 1, // 函数表达式必须有名字
    'no-var': 2, // 禁用var，用let和const代替
    'comma-spacing': 1, // 逗号前后的空格
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
