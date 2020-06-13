
const initialState = null;

function userReducer(state = initialState, action) {
  console.log('user reducer action', action);
  switch(action.type) {
    case 'LOGIN_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return initialState;
    default:
      return state;
  }
}

export default userReducer;