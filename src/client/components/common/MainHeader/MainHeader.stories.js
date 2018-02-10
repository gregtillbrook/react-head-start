import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import MainHeader from './MainHeader';


storiesOf('common/MainHeader', module)
  .addDecorator(StoryRouter())
  .add('default', () => (<MainHeader />));