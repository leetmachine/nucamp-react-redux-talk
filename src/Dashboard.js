import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  
  render() {
    const { user } = this.props;

      return (
        <div>
          <h3>{user.firstName}</h3>
          <h3>{user.age}</h3>
        </div>    
      )
  } 
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Dashboard);