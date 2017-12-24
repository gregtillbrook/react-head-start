![Screenshot showing output for console methods](/docs/react-head-start-logo.jpg?raw=true)

A React App bootstrap with Server Side Rendering, Code Splitting, Hot Reloading, Redux and React Router.

[![Build Status](https://travis-ci.org/gregtillbrook/react-head-start.svg?branch=master)](https://travis-ci.org/gregtillbrook/react-head-start) [dependency up-to-dateness](https://david-dm.org/gregtillbrook/react-head-start.svg) 
[![Known Vulnerabilities](https://snyk.io/test/github/{username}/{repo}/badge.svg)](https://snyk.io/test/github/gregtillbrook/react-head-start)

A rich performant react app can have a lot of fiddly parts once you start adding things like SSR(Server Side Rendering), Code Splitting & Hot loading. You also tend to want similar core setups in each new app you make. This bootstrap aims to capture that setup in a re-usable form and do it in a way that is as clean and intuitive as is (reasonably) possible.

# Highlights

### 🚀 All the react goodness
 - [React v16](https://www.npmjs.com/package/react), [Redux](https://www.npmjs.com/package/redux), [React Router v4](https://www.npmjs.com/package/react-router) provide the core
 - ES2017+ for clean modern javascript
 - Server is [express v4](https://www.npmjs.com/package/express) (running on Node 8 and up)

### 📦 Production ready
 - Production ready app bundled with Parcel (Its lightning quick & to avoid webpack config maintenance)
 - Code splitting hooks to optimise downloaded bundle size
 - Server side rendering to provide best SEO and load performance
 - Logging (to file & console) in production with [log4js](https://www.npmjs.com/package/log4js)
 - Easy app config in different environments with [config](https://www.npmjs.com/package/config)

### 🐵 Dev
 - Instant updates in browser following code changes with Hot Reloading
 - Auto reloading of node upon server code changes with Nodemon
 - Basic SCSS styling in place to extend with what you need or replace with your css-in-js solution of choice
 - Sensible (opiniated) project structure for modular component dev
 - (TODO) watch tasks to lint and unit test continuously on code changes

### ⛑ Code Quality
 - Code linting with eslint
 - Unit testing with jest
 - (TODO) End to end/integration testing with pupeteer (or something like that)


# Getting started

```console
git clone git@github.com:gregtillbrook/react-head-start.git my-react-app
cd my-react-app
npm install
npm run dev
```