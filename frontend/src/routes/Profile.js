import React, { useContext } from 'react';
import UserContext from '../auth/UserContext';
import { List } from 'reactstrap';

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <List type="unstyled">
        <li>Name: {currentUser.firstName} {currentUser.lastName}</li>
        <li>Username: {currentUser.username}</li>
        <li>Email: {currentUser.email}</li>
    </List>
  )
}

export default Profile;