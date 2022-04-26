# Next base

The basis for new projects built with Next.js and TypeScript. Create new projects via the GitHub “Use this template” button.

## Linting and formatting

You can test the results of linting and formatting at any time with `npm run validate`.

### TypeScript, JavaScript and JSON

Code **style** is enforced with ESLint, while **formatting** is performed via Prettier.

Upon committing, files will first be linted with the `--fix` option and then formatted.

You can lint TypeScript and JavaScript at any time with `npm run lint:ts`.

### CSS

CSS style and formatting is performed via Stylelint.

Upon committing, CSS will be linted with the `--fix` option.

You can lint CSS at any time with `npm run lint:css`.

### Commit messages

Once all staged files are passing and ready to be committed, Commitlint will lint the commit
message itself. It enforces a `type` and an optional `scope`, along with a 72 character limit
on the header.

You can run an interactive prompt to assist with making passing commit messages with `npm run commit`.

It will take you step by step through the process of making a passing commit, with tab autocompletion
for `type` and `scope`.

## Testing

We are using [Jest](jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

Tests are executed with `npm test`.

To run Jest in watch mode during development (recommended), run `npm run test:dev` instead.

To generate a coverage report in the `coverage` folder, run `npm run test:coverage`.

Add ` -- --verbose` to the end of any test command to generate verbose output, e.g. `npm run test:coverage -- --verbose`.

### Recommended Structure

Tests should be placed under `src/__tests__` and named according to the
component that is being tested, i.e. the tests for `components/Newsletter/Newsletter.tsx` would be
in a file named `src/__tests__/components/Newsletter.test.tsx`.

The file should be structured similarly to the following.
[See the documentation](https://testing-library.com/docs/react-testing-library/example-intro)
for more details.

```TSX
// Import test utilities
import { react, cleanup } from '@testing-library/react'

// Import custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

// Import the component to test
import { Newsletter } from '@components/Newsletter'

// Clean up after each test
afterEach(cleanup)

// Wrap related tests in a `describe` block to create a test suite
describe('Newsletter', () => {
  test('renders an email input', () => {
    // Arrange
    const { getByLabelText } = render(
      <Newsletter privacyStatement="some text" />
    )
    // Act (and optionally fire events)
    const input = getByLabelText(/email/i)

    // Assert
    expect(input).toHaveAttribute('type', 'email')
  })
})

```

### Customization

To define a custom render method (such as to include global context providers), see [the documentation](https://testing-library.com/docs/react-testing-library/setup#custom-render).

### Resources

**Courses**

- [Testing JavaScript](https://testingjavascript.com/)

**React Testing Library**

- https://testing-library.com/docs/react-testing-library/api
- https://github.com/testing-library/jest-dom
- https://testing-library.com/docs/react-testing-library/cheatsheet

**Jest**

- https://jestjs.io/docs/en/getting-started

**Testing Gatsby projects**

- https://www.gatsbyjs.org/docs/unit-testing/

## Accessibility Testing

We include [@axe-core/react](https://www.npmjs.com/package/@axe-core/react) for accessibility testing in dev mode - you can check your browser's dev tools console for accessibility warnings and errors. See the repository for full [details on usage](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react#readme).

## Error tracking with [Sentry](https://sentry.io/)

1. Create a new project at https://sentry.io/organizations/acolorbright/projects/new/; Make sure you select `next.js` as platform.
2. Set the values for the following environment variables:

- `NEXT_PUBLIC_SENTRY_DSN`: you can find the DSN for your project at `https://sentry.io/settings/acolorbright/projects/<your-project>/keys/`
- `SENTRY_ORG`: acolorbright
- `SENTRY_PROJECT`: the name of your project as it is listed at https://sentry.io/organizations/acolorbright/projects/
- `SENTRY_AUTH_TOKEN`: you can find the Authentication Token at https://sentry.io/settings/account/api/auth-tokens/

3. Set up an alert that will send the errors to a Slack channel at https://sentry.io/organizations/acolorbright/alerts/rules/

Sentry will automatically log errors that are thrown with `throw new Error(error)` by you can also `import { captureException } from '@sentry/nextjs'` and use `captureException(error)`. See [the Sentry documentation](https://docs.sentry.io/platforms/javascript/) for more information.
