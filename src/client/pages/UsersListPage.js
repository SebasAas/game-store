// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../actions';
// import { Helmet } from 'react-helmet';

// function UsersList() {
//   const users = useSelector(state => state.users)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(fetchUsers())
//   }, [])

//   const RenderUsers = () => {
//     return users.map(user => {
//       return <li key={user.id}>{user.name}</li>;
//     });
//   }

//   const Head = () => {
//     return (
//       <Helmet>
//         <title>{`${users.length} Users Loaded`}</title>
//         <meta property="og:title" content="Users App" />
//       </Helmet>
//     );
//   }

//   return (
//     <div>
//       {Head()}
//       Here's a big list of users:
//       <ul>{RenderUsers()}</ul>
//     </div>
//   );
// }

// function loadData(store) {
//   return store.dispatch(fetchUsers());
// }

// export default {
//   loadData,
//   component: UsersList
// };

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};
