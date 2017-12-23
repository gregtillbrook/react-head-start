import ErrorPage from './ErrorPage';
import createRouterContext from 'react-router-test-context';


describe('pages/ErrorPage', function() {

  it('should render error message', function() {
    const page = shallow(<ErrorPage />, {context:createRouterContext()});
    expect(page.find('h2').text()).toEqual('Error: page not found');
  });

});