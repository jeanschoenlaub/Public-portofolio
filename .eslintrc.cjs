/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: './tsconfig.json', // Make sure to point to your tsconfig file
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    // Your rules here
  },
  overrides: [
    {
      // Apply TypeScript specific rules only to TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
          },
        ],
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-misused-promises": [
          2,
          {
            checksVoidReturn: { attributes: false },
          },
        ],
      },
    },
  ],
  ignorePatterns: [
    // Ignore all JavaScript files
    "**/*.js",
  ],
};

module.exports = config;
