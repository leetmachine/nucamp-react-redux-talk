import React from 'react';
import { connect } from 'react-redux';

/*ACTIONS */
function login() {
  console.log('logging in...');
  return {
    type: 'LOGIN_USER',
    payload: {firstName: 'Keegan', age: 30}
  }
}

function logout() {
  return {
    type: 'LOGOUT_USER'
  }
}

class UserProfile extends React.Component {
  
  render() {

    const {user, login, logout} = this.props;

    return (
      <div>
      <h1>{user ? user.firstName : 'not logged in'}</h1>
      <button onClick={login}>login</button>
        <button onClick={logout}>logout</button>
    </div>    
    )
  } 
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);