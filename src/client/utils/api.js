//iso fetch so we use fetch during SSR
import 'isomorphic-fetch';
import config from 'config';

export default {

  fetchUsers: ()=>{
    //client requests to api on same host dont require the host when fetching from browser
    //but do when fetching from server (i.e. when this is called during SSR)
    return fetch(config.clientConfig.apiHost + '/api/users')
      .then(res => {
        return res.json();
      });
  }

};