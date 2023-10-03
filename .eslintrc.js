module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "standard",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "off",
    "semi": "off",
    "camelcase": "off",
    "space-before-function-paren": "off",
    "comma-dangle": "off",
    "quotes": "off",
    "multiline-ternary": "off"
  },
};
