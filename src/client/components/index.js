//group common componets into a single module of exports so we have 
//less import boilerplate in pages and components
//Note: be mindful of code splitting though, only import truly common components here
//that are intended to be in the main bundle

export {default as MainHeader} from './common/MainHeader/MainHeader';
export {default as MainFooter} from './common/MainFooter/MainFooter';
export {default as MainLayout} from './common/MainLayout/MainLayout';
export {default as ErrorMessage} from './common/ErrorMessage/ErrorMessage';
export {default as Loading} from './common/Loading/Loading';


// pass through common 3rd party components to also cut down on import boilerplate

export {Helmet} from 'react-helmet';
