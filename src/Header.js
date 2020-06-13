import React from 'react';


export default class Header extends React.Component {


  render() {
    const {user} = this.props;

    return (
      <div>
        <h1>{user ? user.name : 'not logged in'}</h1>
      </div>
    )
  }
}