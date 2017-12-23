import 'isomorphic-fetch';

export default {

  fetchUsers: ()=>{
    return fetch('http://localhost:5000/api/users')
      .then(res => {
        return res.json();
      });
  }

};