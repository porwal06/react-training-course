import { Fragment, Component, useEffect } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from './user-context';
import ErrorBoundry from './ErrorBoundry';

// get value from context 


class UserFinder extends Component {
  static contextType = UsersContext; //contextType is reserve keyword so only one context we can assign here.
  // DUMMY_USERS = [
  //   { id: 'u1', name: 'Max' },
  //   { id: 'u2', name: 'Manuel' },
  //   { id: 'u3', name: 'Julie' },
  // ];

  constructor() {
    super();
    this.state = { 
      filteredUsers: [],//this.DUMMY_USERS,
      searchTerm: ''
    }
  }
componentDidMount() {
  this.setState({
    filteredUsers: this.context.users
  });

}
componentDidUpdate(prevProps, prevState) {
  if(prevState.searchTerm !== this.state.searchTerm) {
  this.setState({
      filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
    }
  );
  }
  //return this.filteredUsers = this.DUMMY_USERS.filter((user) => user.name.includes(this.searchTerm));
}
  // componentDidMount() {
  //   return this.filteredUsers = this.DUMMY_USERS.filter((user) => user.name.includes(this.searchTerm))
  // }

  searchChangeHandler(event) 
  {
    this.setState(() => {
      return {searchTerm: event.target.value}
    });
  };


  render(){  
    return <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={this.searchChangeHandler.bind(this)} />
      </div>
      
      <ErrorBoundry>
      <Users users={this.state.filteredUsers} />
      </ErrorBoundry>
    </Fragment>
  }
}


// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;