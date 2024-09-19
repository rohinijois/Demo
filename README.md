

### Installation

Given a local environment with NodeJS 20:

```
npm install
```

You may need to perform some additional setup the first time you run Cypress.

Everything else should work out of the box.

### Utilities

This repository includes `prettier` to help you keep your work formatted:

```
npm run format <file path>
```

```
npm run format:all
```

### Exercise One

Last Call Media's [website](https://lastcallmedia.com) breaks every time we push
code to it! We want your help to add some tests to help us automate some basic
quality control.

The form on https://lastcallmedia.com/contact sometimes allows users to
submit without filling out the CAPTCHA. We would like to verify that the form 
**cannot** be submitted without solving the CAPTCHA (note: no need to actually
perform a successful submission here).

Use [Cypress](https://www.cypress.io/) to create these tests. The tests will be
run locally, and will run against production (https://lastcallmedia.com).

[Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro)
is also available to you.

A basic Cypress environment is already set up for you in the `cypress` directory
of this repository.

Your tests should be inside of the `cypress/e2e` directory.

To run tests locally using the Cypress GUI:

```
npm run cypress:open
```

### Exercise Two

Write a function that accepts a collection of numbers and returns the sum of the
odd numbers.

This function should be exported from a module so that it can be reused
elsewhere.

Your solution should include unit tests that assert the function works as
expected using [Jest](https://jestjs.io/).

Consider edge cases, maintainability, and the needs of future users of this
function.

Your module and unit tests should be inside of the `src` directory.

Your unit tests should end with the `.spec.ts` file extension.

To run tests locally:

```
npm run test
```
