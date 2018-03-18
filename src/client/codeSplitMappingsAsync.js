/*
Code Splitting config for Asyncronous load (aka on client)

This file is paired with codeSplitMappingsSync.js - they must have the same exports.
This file is imported in the client bundle while codeSplitMappingsSync is imported on 
the server (see package.json "browser" mappings) - this is necessary for code splitting to work. 
The dynamic import(...) calls below are what define the seperate code splitting sub bundles.
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
