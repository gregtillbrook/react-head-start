//When polyfilling es6+ features you have 2 choices
//1) Import all of babel-polyfill (easier but larger)
// import 'babel-polyfill';

//2) Import the regenerator runtime + specific polyfills from core-js
//see https://github.com/zloirock/core-js#commonjs
import 'regenerator-runtime/runtime';
//add core-js polyfills as necessary. e.g. import 'core-js/es6/date'