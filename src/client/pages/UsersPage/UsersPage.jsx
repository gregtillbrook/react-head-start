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