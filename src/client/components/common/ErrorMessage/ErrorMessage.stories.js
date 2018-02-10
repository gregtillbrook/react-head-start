import React from 'react';
import { storiesOf } from '@storybook/react';

import ErrorMessage from './ErrorMessage';


storiesOf('common/ErrorMessage', module)
  .add('default', () => <ErrorMessage />)
  .add('with message', () => <ErrorMessage error={{message:'You are so screwed now'}} />);