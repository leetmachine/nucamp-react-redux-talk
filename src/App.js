import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
<<<<<<< HEAD

/*ACTIONS 
if you intend to update the REDUX STORE
all you need is a function that returns exactly:
{ type: 'A_KEY_YOU_DEFINED', payload?: optional, any value you intend to use }
*/
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
=======
import Dashboard from './Dashboard';
>>>>>>> added-dashboard

class App extends React.Component {

  render() {
    const { user } = this.props;
    return (
      <div>
        <Header />
        {user ? <Dashboard /> : <h3>no user</h3>}
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(App);
