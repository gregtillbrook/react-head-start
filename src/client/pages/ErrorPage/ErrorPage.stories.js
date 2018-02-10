import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import ErrorPage from './ErrorPage';


storiesOf('pages/ErrorPage', module)
  .addDecorator(StoryRouter())
  .add('default', () => <ErrorPage />);