// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const folders = fs
	.readdirSync('src', { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);

module.exports = {
	root: true,
	extends: [
		'@acolorbright/eslint-config-ts-react',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'simple-import-sort',
		'prettier',
		'react',
		'react-hooks',
		'jsx-a11y',
	],
	rules: {
		'jsx-a11y/anchor-is-valid': 0,
		'no-restricted-syntax': 0,
		'no-use-before-define': 0,
		'no-useless-constructor': 0,
		'no-useless-escape': 1,
		'prettier/prettier': 2,
		'react-hooks/exhaustive-deps': 0,
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					// Side effects
					['^\\u0000'],
					// Packages:
					// 1. `react`-related packages
					// 2. `next`-related packages
					// 3. Third-party packages starting with `@` followed by a word character
					// 4. Third-party packages starting with a word character
					[
						'^react',
						'^@react',
						'next',
						`^(@(?!(${folders.join('|')})))\\w+(/.*|$)`,
						'^\\w',
					],
					// Components
					[`^@components(/.*|$)`],
					// Other absolute `@` imports
					[`^@(${folders.filter((f) => f !== 'components').join('|')})(/.*|$)`],
					// Relative imports using `src`
					['^.*/src/.*'],
					// Anything not matched in another group.
					['^'],
					// Other relative imports
					['^\\.'],
				],
			},
		],
		'simple-import-sort/exports': 'error',
		'sort-imports': 'off',
		'import/extensions': [1, 'never'],
		'import/first': 2,
		'import/newline-after-import': 2,
		'import/no-duplicates': 2,
		'import/no-unresolved': 0,
		'import/order': 0,
		'spaced-comment': [2, 'always', { markers: ['/'] }],
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-use-before-define': 1,
		'@typescript-eslint/no-useless-constructor': 2,
	},
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
	env: {
		jest: true,
	},
};
