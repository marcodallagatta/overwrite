module.exports = {
  arrowParens: 'avoid', // Remove parentheses around a sole arrow function parameter (const x = y => {...})
  bracketSpacing: false, // Do not print spaces between brackets in object literals.
  endOfLine: 'lf',
  jsxBracketSameLine: false, // If your component has multi-line properties, close its tag on a new line.
  jsxSingleQuote: false, // Use double quotes in JSX.
  printWidth: 120,
  quoteProps: 'as-needed', // Only quote properties that are invalid identifiers.
  semi: true, // using semicolons helps with git consistency
  singleQuote: true, // Use single quotes instead of double quotes.
  tabWidth: 2,
  trailingComma: 'es5', // Print trailing commas wherever possible when multi-line. (A single-line array, for example, never gets trailing commas.)
  useTabs: false,
};
