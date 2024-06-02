module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:all",
    'plugin:react/recommended',
    'standard-with-typescript',
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    "eslint-plugin-smells",
    "complexity"
  ],
  rules: {
    "smells/no-complex-switch-case": "warn",
      "smells/no-this-assign": "warn",
      "smells/no-complex-chaining": "warn",
      "smells/no-setinterval": "warn",
      "smells/no-complex-string-concat": "warn",
      "complexity": ["warn", 5],
      "max-depth": ["warn", 5],
      "no-duplicate-imports": "off",
      "@typescript-eslint/no-duplicate-imports": "warn",
      "no-unused-vars": "warn",
      "max-lines": ["warn", 50],
       "max-lines-per-function": ["warn", 20],
      "semi": "off",
      "array-element-newline": "off",
      "no-magic-numbers":"off",
      "prefer-const": "warn",
      "max-params":"warn",
      "function-call-argument-newline":"off",
      "indent": "off",
      "arrow-body-style":"warn",
      "no-console":"off",
      "consistent-return":"warn",
      "multiline-comment-style":"warn",
      "no-plusplus":"off",
      "id-length":"warn",
      "space-before-function-paren":"warn",
      "func-style":"warn"
  }
}
