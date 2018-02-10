//main config for storybook

import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
//note: we depend on our parcel build of sass (see the npm script "storybook" for the css build) 
import '../dist/bundles/index.css';
import 'github-markdown-css';
import './storybook.css'

setOptions({
  sortStoriesByKind: true
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/client', true, /.stories.js$/);
function loadStories() {
  //Note: sortStoriesByKind doesnt seem to work so force intro story first
  req('./introduction.stories.js');
  
  req.keys()
    .forEach((filename) => req(filename));
}

configure(loadStories, module);


