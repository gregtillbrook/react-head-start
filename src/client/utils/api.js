import 'isomorphic-fetch';

export default {

  fetchUsers: ()=>{
    return fetch('/api/users')
      .then(res => {
        return res.json();
      });
  }

};