# teeny-weeny-router

[![Travis Build Status](https://img.shields.io/travis/caalberts/teeny-weeny-router.svg?style=flat-square)](https://travis-ci.org/caalberts/teeny-weeny-router)
[![Codecov.io Status](https://img.shields.io/codecov/c/github/caalberts/teeny-weeny-router.svg?style=flat-square)](https://codecov.io/github/caalberts/teeny-weeny-router)
[![Gemnasium](https://img.shields.io/gemnasium/caalberts/teeny-weeny-router.svg?style=flat-square)](https://gemnasium.com/caalberts/teeny-weeny-router)
[![npm](https://img.shields.io/npm/v/teeny-weeny-router.svg?style=flat-square)](https://www.npmjs.com/package/teeny-weeny-router)



A teeny weeny front end router for single page apps

## Usage

1. `npm install` to install dependencies
2. `npm run compile` to compile from ES2015 `src/index.js` to ES5 `lib/index.js`
3. Instantiate with `const router = new TeenyWeenyRouter(routes, navigation)` where `navigation` is the nav element to trigger routing
