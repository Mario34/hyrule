/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  overrides: [
    {
      files: ['*.js'],
      extends: ['@mario34/eslint-config-base'],
      plugins: ['prettier'],
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@mario34/eslint-config-ts'],
      plugins: ['prettier'],
      env: {},
      rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/quotes': 'off',
      },
    },
  ],
}
