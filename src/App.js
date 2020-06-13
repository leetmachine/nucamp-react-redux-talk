import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Dashboard from './Dashboard';

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
