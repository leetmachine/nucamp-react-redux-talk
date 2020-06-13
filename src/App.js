import React from 'react';
import { connect } from 'react-redux';

/*ACTIONS */
function login() {
  console.log('logging in...');
  return {
    type: 'LOGIN_USER',
    payload: {name: 'Keegan'}
  }
}

function logout() {
  return {
    type: 'LOGOUT_USER'
  }
}


class App extends React.Component {

  render() {

    const { user } = this.props;

    return (
      <div>
        <h1>{user ? user.name : 'not logged in'}</h1>
        <button onClick={this.props.login}>login</button>
        <button onClick={this.props.logout}>logout</button>
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
