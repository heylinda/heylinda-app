# Style Guide

Here are the style rules to follow:

## #1 Be consistent with the rest of the codebase

This is the number one rule and should help determine what to do in most cases.

## #2 Respect Prettier and Linter rules

We use a linter and prettier to automatically help you make style guide decisions easy.

## #3 File Name

Generally file names are PascalCase if they are components or classes, and camelCase otherwise. Filenames' extension must be .tsx for component files and .ts otherwise.

## #4 Respect Google JavaScript style guide

The style guide accessible
[here](https://google.github.io/styleguide/jsguide.html) should be
respected. However, if a rule is not consistent with the rest of the codebase,
rule #1 takes precedence. Same thing goes with any of the above rules taking precedence over this rule.

## #5 Follow these grammar rules

- Functions descriptions have to start with a verb using the third person of the
  singular.
  - _Ex: `/\*\* Tests the validity of the input. _/`\*
- Inline comments within procedures should always use the imperative.
  - _Ex: `// Check whether the value is true.`_
- Acronyms have to be uppercased in comments.
  - _Ex: `// IP, DOM, CORS, URL...`_
  - _Exception: Identity Provider = IdP_
- Acronyms have to be capitalized (but not uppercased) in variable names.
  - _Ex: `redirectUrl()`, `signInIdp()`_
- Never use login/log in in comments. Use “sign-in” if it’s a noun, “sign in” if
  it’s a verb. The same goes for the variable name. Never use `login`; always use
  `signIn`.
  - _Ex: `// The sign-in method.`_
  - _Ex: `// Signs in the user.`_
- Always start an inline comment with a capital (unless referring to the name of
  a variable/function), and end it with a period.
  - _Ex: `// This is a valid inline comment.`_
