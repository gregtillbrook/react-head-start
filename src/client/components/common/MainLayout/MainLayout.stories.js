import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import MainLayout from './MainLayout';


storiesOf('common/MainLayout', module)
  .addDecorator(StoryRouter())
  .add('default', () => (<MainLayout>Mock body content</MainLayout>));