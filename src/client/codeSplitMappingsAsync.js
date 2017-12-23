/*

*/
import { asyncComponent } from 'react-async-component';
import {Loading, ErrorMessage} from './components/';


function makeAsyncComponent(importFunc){
  return asyncComponent({
    resolve: importFunc,
    LoadingComponent: Loading, // Optional
    ErrorComponent: ErrorMessage // Optional
  });
}

export const HomePage = makeAsyncComponent(() => import('./pages/HomePage/HomePage'));
export const UsersPage = makeAsyncComponent(() => import('./pages/UsersPage/UsersPage'));
export const ErrorPage = makeAsyncComponent(() => import('./pages/ErrorPage/ErrorPage'));
