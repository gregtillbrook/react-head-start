import {UsersPage} from './UsersPage';
import createRouterContext from 'react-router-test-context';


describe('pages/UsersPage', function() {

  it('should render content', function() {
    const mockAction = ()=>{};
    const page = shallow(<UsersPage fetchUsers={mockAction} />, {context:createRouterContext()});
    expect(page.find('h2').text()).toEqual('Users Page');
  });

});
