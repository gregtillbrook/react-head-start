import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import MainFooter from './MainFooter';


storiesOf('common/MainFooter', module)
  .addDecorator(StoryRouter())
  .add('default', () => (<MainFooter />));