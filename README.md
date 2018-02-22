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
 - Production ready app bundled with Parcel i.e. no webpack. Its lightning quick & and zero configuration so no need to maintain a webpack (or grunt or gulp) config file
 - [Code splitting](https://parceljs.org/code_splitting.html) hooks to optimise downloaded bundle size
 - Server side rendering to provide best SEO and load performance
 - Logging (to file & console) with [winston](https://www.npmjs.com/package/winston)
 - Easy app config in different environments with [config](https://www.npmjs.com/package/config)

### 🐵 Dev
 - Instant updates in browser following code changes with Hot Reloading (aka HMR or [Hot Module Replacement](https://parceljs.org/hmr.html))
 - Auto reloading of node upon server code changes thanks to [Nodemon](https://www.npmjs.com/package/nodemon)
 - Interactive development/debugging/testing of UI components with [Storybook](https://storybook.js.org/)
 - Basic SCSS styling in place to extend with what you need or replace with your css-in-js solution of choice
 - Sensible (opiniated) project structure for modular component dev. The code/styling/tests/etc for component are all in the same folder
 - Watch task to lint and unit test continuously on code changes

### ⛑ Code Quality
 - Syntax checking (aka linting) with [eslint](https://www.npmjs.com/package/eslint)
 - Unit testing with [jest](http://facebook.github.io/jest/)
 - End to end/integration testing with [cypress](https://www.cypress.io/)



# Getting started

```console
git clone git@github.com:gregtillbrook/react-head-start.git my-react-app
cd my-react-app
npm install
npm run dev
```


# Key npm scripts
The npm scripts may look confusing at first but most arent meant to be called directly but get called as part of other scripts. The key scripts to know are;

```npm run dev```
Standard dev command. Runs up the app in 'dev' mode with auto reloading on server code changes + hot reloading of client.

```npm run prod```
Builds app in production mode (minified & faster than dev mode) and serves prod app. If you need to build and serve indepentally (which you probably do) use ```npm run prod:build``` and ```npm run prod:serve```. Note: prod:build is broken down into several sub tasks (client build, server build, copy files to dist folder) for readability but you wont need to run those individually.

```npm test```
Runs linting, unit tests and end to end tests. This is what the CI build runs and is good practice to run before each commit. You can also individually run ```npm run lint``` ```npm run test:unit``` and ```npm run test:e2e```.

```npm run test:watch```
Runs a watch task that runs linting and unit tests each time the code changes. This is a useful one to run alongside ```npm run dev``` while developing. Note: the e2e tests are omitted from this by default because they tend to run a little slower in normal sized apps.

```npm run test:e2e:dev```
Use this when authoring e2e tests. ```npm run test:e2e``` runs the tests in headless mode and handles the build + running of the app which is great for test runs and CI but is not optimal for developing and debugging. To develope e2e tests 
 - In a terminal window, start up the app with ```npm run prod```
 - In a second terminal window, open the cypress UI with ```npm run test:e2e:dev```

```npm run storybook```
For interactive development/debugging/testing of components. You can also use ```npm run storybook:build``` to generate a static storybook site

```npm run todo```
A little helper to console log a list of all TODO notes in the app.



# Things to think about

### You may not need code splitting
The value of code splitting depends a lot on the structure of your app. If you have a large app with many distinct but rich pages, code splitting could be incredibly valuable. However if your app is small or HAS to load the bulk of your code in the initial load, then code splitting may not be so useful.

### You may not need server side rendering
Historically, server side rendering has been important for things like SEO (search engines would index static html only) and page load performance. But nowadays these things are less of an issue e.g. google now executes javascript when indexing a page (although other search engines still vary in js support). So again, your apps structure and requirements will dictate how valuable SSR is to you.

### This thing has a lot of crap I don't want
React bootstraps tend to be opiniated by their nature. The trick is hitting the balance between adding stuff thats useful and bloating it with useless stuff that makes the starter app harder to understand. What do you think - is there something important missing? or have I included something that really shouldnt be here?

### Where's webpack?
Webacks configurability is great for complex apps or those requiring very specific builds. If you can avoid having to write/maintain a webpack config then thats a win - so I preferr to start with Parcel or create-react-app and swap to full webpack only when needed.

### Lots of comments?
Ive tried to comment this app quite heavily so it's easier to understand what's going on as you step through the code. You'll probably what to clear a lot of those comments out when you start using the app. Is there anything confusing that could use more documentation?



# TODO
Stuff not done yet that Im considering adding;
 - code coverage reporting (+ make sure this bootstrap starts from 100% coverage)
 - service worker for [Progressive Web App](https://developers.google.com/web/progressive-web-apps/)
 - [prettier](https://www.npmjs.com/package/prettier)
 - Internationalisation


[travis-image]: https://img.shields.io/travis/gregtillbrook/react-head-start/master.svg?label=Linux%20CI%20Build
[travis-url]: https://travis-ci.org/gregtillbrook/react-head-start
[appveyor-image]: https://img.shields.io/appveyor/ci/gregtillbrook/react-head-start/master.svg?label=Windows%20CI%20Build
[appveyor-url]: https://ci.appveyor.com/project/gregtillbrook/react-head-start
[snyk-image]: https://snyk.io/test/github/gregtillbrook/react-head-start/badge.svg
[snyk-url]: https://snyk.io/test/github/gregtillbrook/react-head-start
[david-image]: https://david-dm.org/gregtillbrook/react-head-start.svg
[david-url]: https://david-dm.org/gregtillbrook/react-head-start
