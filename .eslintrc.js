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
      extends: [
        '@mario34/eslint-config-ts',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ],
      plugins: ['prettier', 'import'],
      rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/quotes': 'off',
        'import/no-unresolved': [
          'error',
          {
            ignore: ['@/*'],
          },
        ],
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            pathGroups: [
              {
                pattern: '@/**',
                group: 'external',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            alphabetize: {
              order: 'asc',
            },
          },
        ],
      },
    },
  ],
}
