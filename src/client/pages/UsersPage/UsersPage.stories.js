import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

//Note: we're imported the non 'connect' wrapped version of this component
import { UsersPage } from './UsersPage';


storiesOf('pages/UsersPage', module)
  .addDecorator(StoryRouter())
  .add('no users', () => <UsersPage fetchUsers={()=>{}} />)
  .add('1 user', () => <UsersPage fetchUsers={()=>{}} users={[{name:'Mock user'}]} />);