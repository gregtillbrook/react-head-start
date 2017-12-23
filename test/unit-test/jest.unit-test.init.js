//common test init run before ever unit test file

import './jest.polyfills.js'; //polyfills must be imported before other imports to suppress jest warnings
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
// import toJson from 'enzyme-to-json';

//React Enzyme adapter
configure({ adapter: new Adapter() });

//expose common functions used in tests
//yes, globals are bad, but; 
// a) this is only in our tests, not production code
// b) these would be imported in every test anyway making them implicit globals
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
