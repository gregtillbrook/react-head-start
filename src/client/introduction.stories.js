import React from 'react';
import { storiesOf } from '@storybook/react';

import README from '../../README.md';


//simple helper to output mardown based docs (defined here instead of main app because it's
//potentially dangerous if misused)
//eslint-disable-next-line react/prop-types
const Markup = ({content}) => <div className="markdown-body" dangerouslySetInnerHTML={{__html:content}} />;


storiesOf('introduction', module)
  .add('ReadMe', () => <Markup content={README} />);