import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import HomePage from './HomePage';


storiesOf('pages/HomePage', module)
  .addDecorator(StoryRouter())
  .add('default', () => <HomePage />);