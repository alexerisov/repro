module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  semi: true,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "none",
  bracketSameLine: true,
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "lf",
  importOrderGroupNamespaceSpecifiers: true,
  importOrder: [
    "^react$",
    "^@(/api)(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@(/components|mui/material)(.*)$",
    "^(~public|@mui/icons)(.*)$",
    "^[./](.*)$"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: ["*.json", ".eslintrc"],
      options: {
        parser: "json",
        singleQuote: false
      }
    }
  ]
};
