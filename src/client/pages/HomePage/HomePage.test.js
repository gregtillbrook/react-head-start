import HomePage from './HomePage';
import createRouterContext from 'react-router-test-context';


describe('pages/Home', function() {

  it('should render content', function() {
    const page = shallow(<HomePage />, {context:createRouterContext()});
    expect(page.find('h2').text()).toEqual('Home Page');
  });

});