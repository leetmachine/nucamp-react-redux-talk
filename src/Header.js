import React from 'react';


export default class Header extends React.Component {


  render() {
    const { user, login, logout } = this.props;

    return (
      <div>
        <UserProfile user={user} login={login} logout={logout} />
      </div>
    )
  }
}


function UserProfile(props) {
  const {user, login, logout} = props;
  return (
    <div>
      <h1>{user ? user.name : 'not logged in'}</h1>
      <button onClick={login}>login</button>
        <button onClick={logout}>logout</button>
    </div>    
  )
}