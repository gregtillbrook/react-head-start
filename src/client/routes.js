import App from './App';
import {HomePage, UsersPage, ErrorPage} from './codeSplitMappingsSync';

const routes = [
  { 
    component: App,
    routes: [
      { path: '/', exact: true, component: HomePage, layout:'fred'  },
      { path: '/users', component: UsersPage, layout:'fred2'  },
      { path: '*', component: ErrorPage, layout:'fred2'  }
    ]
  }
];

export default routes;