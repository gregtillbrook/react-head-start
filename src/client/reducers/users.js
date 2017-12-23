import api from '../utils/api';


export const USERS_LOADED = 'USERS_LOADED';


export const fetchUsers = () => async (dispatch) => {
  const data = await api.fetchUsers();
  dispatch({
    type: USERS_LOADED,
    items: data.users
  });
};


const initialState = {
  items: []
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    
  case USERS_LOADED:
    return Object.assign({}, state, { items: action.items });
  
  default:
    return state;
  }
}
