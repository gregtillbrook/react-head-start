![Screenshot showing output for console methods](/docs/react-head-start-logo.jpg?raw=true)

A React App bootstrap with Server Side Rendering, Code Splitting, Hot Reloading, Redux and React Router.

[![Linux CI Build][travis-image]][travis-url]
[![Windows CI Build][appveyor-image]][appveyor-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![Dependency Up-to-dateness][david-image]][david-url]


A rich performant react app can have a lot of fiddly parts once you start adding things like SSR(Server Side Rendering), Code Splitting & Hot loading. You also tend to want similar core setups in each new app you make. This bootstrap aims to capture that setup in a re-usable form and do it in a way that is as clean and intuitive as is (reasonably) possible.

# Highlights

### 🚀 All the react goodness
 - [React v16](https://www.npmjs.com/package/react), [Redux](https://www.npmjs.com/package/redux), [React Router v4](https://www.npmjs.com/package/react-router) provide the core
 - ES2017+ standard modern javascript
 - Server is [express v4](https://www.npmjs.com/package/express) (running on Node 8 and up)

### 📦 Production ready
 - Production ready app bundled with Parcel i.e. no webpack. Its lightning quick & and zero configuration so need to maintain webpack configuration.
 - Code splitting hooks to optimise downloaded bundle size
 - Server side rendering to provide best SEO and load performance
 - Logging (to file & console) with [winston](https://www.npmjs.com/package/winston)
 - Easy app config in different environments with [config](https://www.npmjs.com/package/config)

### 🐵 Dev
 - Instant updates in browser following code changes with Hot Reloading
 - Auto reloading of node upon server code changes thanks to [Nodemon](https://www.npmjs.com/package/nodemon)
 - Basic SCSS styling in place to extend with what you need or replace with your css-in-js solution of choice.
 - Sensible (opiniated) project structure for modular component dev. The code/styling/tests/etc for component are all in the same folder.
 - Watch task to lint and unit test continuously on code changes

### ⛑ Code Quality
 - Syntax checking (aka linting) with [eslint](https://www.npmjs.com/package/eslint)
 - Unit testing with [jest](http://facebook.github.io/jest/)
 - End to end/integration testing with [cypress](https://www.cypress.io/)


# Getting started

```console
git clone git@github.com:gregtillbrook/react-head-start.git my-react-app
cd my-react-app
npm installs
npm run dev
```


# TODO
Stuff not done yet that Im considering adding
 - code coverage reporting + make sure this bootstrap starts from 100% coverage
 - service working for Progressive Web App starter


[travis-image]: https://img.shields.io/travis/gregtillbrook/react-head-start/master.svg?label=Linux%20CI%20Build
[travis-url]: https://travis-ci.org/gregtillbrook/react-head-start
[appveyor-image]: https://img.shields.io/appveyor/ci/gregtillbrook/react-head-start/master.svg?label=Windows%20CI%20Build
[appveyor-url]: https://ci.appveyor.com/project/gregtillbrook/react-head-start
[snyk-image]: https://snyk.io/test/github/gregtillbrook/react-head-start/badge.svg
[snyk-url]: https://snyk.io/test/github/gregtillbrook/react-head-start
[david-image]: https://david-dm.org/gregtillbrook/react-head-start.svg
[david-url]: https://david-dm.org/gregtillbrook/react-head-start
