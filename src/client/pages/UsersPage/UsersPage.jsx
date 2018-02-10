//A slightly more complex page showing redux binding. Note the 'fetchData' static method
//that is used during SSR to call all the necessary actions to create the page 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MainLayout, Helmet } from '../../components/';
import { fetchUsers } from '../../reducers/users';


export class UsersPage extends Component {
  
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array
  };
  
  //This is used during SSR - see src/server/routes/renderPageRoute.js (fetchDataAndInitReduxStore)
  //As you add pages to your app you just need to make sure fetchData calls the necessary actions to 
  //load data the page needs and you shouldnt need to delve into server code very often. It is good 
  //to understand what the server code is doing during SSR though.
  static fetchData(store) {
    return store.dispatch(fetchUsers());
  }

  componentDidMount() {
    this.props.fetchUsers();
  }
  
  render() {
    const users = this.props.users || [];

    const liTags = users.map(user=>{
      return (
        <li key={user.name}>{user.name}</li>
      );
    });

    return (
      <MainLayout>
        <Helmet>
          <title>My site: Users page</title>
        </Helmet>

        <h2>Users Page</h2>

        <ul className="users">
          {liTags}
        </ul>
      </MainLayout>
    );
  }
}

export default connect(
  state => ({
    users: state.users.items
  }),
  {
    fetchUsers
  }
)(UsersPage);