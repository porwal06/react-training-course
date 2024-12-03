//import { useState } from 'react';
import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// Class based component
class Users extends Component{
  constructor() {
    
    super();
    // console.log(this.props);
    this.DUMMY_USERS = [
      { id: 'u1', name: 'Max' },
      { id: 'u2', name: 'Manuel' },
      { id: 'u3', name: 'Julie' },
    ];   
    
    this.state = {showUsers: true};
  }
  componentDidUpdate() {
    if(this.props.users.length === 0) {
      throw new Error("Sorry no content found");
    }
  }
  toggleUsersHandler = () => {
    this.setState((curState) => {
      return {showUsers: !curState.showUsers}
    })
  };

  render() {
    
    this.usersList = (
      // <ul>
      //   {this.DUMMY_USERS.map((user) => (
      //     <User key={user.id} name={user.name} />
      //   ))}
      // </ul>
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
  
    return <div className={classes.users}>
    <button onClick={this.toggleUsersHandler.bind(this)}>
      {this.state.showUsers ? 'Hide' : 'Show'} Users
    </button>
    {this.state.showUsers && this.usersList}
  </div>;
  }
}


// Function based component
// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
