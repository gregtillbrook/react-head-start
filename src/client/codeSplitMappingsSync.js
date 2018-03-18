/*
Code Splitting config for Syncronous load (aka on server)

This file is paired with codeSplitMappingsAsync.js - they must have the same exports.
This file is imported on the server while codeSplitMappingsAsync is imported in the client 
bundle (see package.json "browser" mappings) - this is necessary for code splitting to work. 
Unlike codeSplitMappingsAsync all imports on server are standard module imports (the server 
needs all code imported up front).
*/
export {default as HomePage} from './pages/HomePage/HomePage';
export {default as UsersPage} from './pages/UsersPage/UsersPage';
export {default as ErrorPage} from './pages/ErrorPage/ErrorPage';