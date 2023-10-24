module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "linebreak-style": "off",
    "no-alert": "off",
    "react/prop-types": "off",
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": ["off"],
    "react/default-props-match-prop-types": ["error"],
    "react/no-array-index-key": ["off"],
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ]
  },
}
