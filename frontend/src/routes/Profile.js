import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../auth/UserContext';
import BackendApi from '../api/api';
import { Button } from 'reactstrap';
import './Profile.css';

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  const [profiles, setProfiles] = useState(null);
  const username = currentUser.username;

  const getProfiles = async () => {
    let foundProfiles = await BackendApi.getUsersProfiles(username);
    setProfiles(foundProfiles);
  };

  useEffect(() => {
    getProfiles();
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  
  
  // useEffect(() => {
  //   const getProfiles = async () => {
  //     let foundProfiles = await BackendApi.getUsersProfiles(username);
  //     setProfiles(foundProfiles);
  //   }
  //   getProfiles();
  // }, [username])

  const loadProfile = async (evt) => {
    let profileID = evt.target.getAttribute('data-id');
    let res = await BackendApi.getProfileData(username, profileID);
    let profileSettings = res.effects;
    console.log(profileSettings);
  }

  if (!profiles) return "Loading..."

  const profileList = profiles.map((profile) => (
    <Button className="mx-3" 
            color="primary" 
            key={profile.id}
            data-id={profile.id}
            onClick={loadProfile}>
      {profile.profile_name}
    </Button>
  ))

  return (
    <div className="Profile">
      <h4 className="mb-5">Click one of your synth profiles below to load your saved settings:</h4>
      {profileList}
      {/* <List className="mt-5" type="unstyled">
          <li>Name: {currentUser.firstName} {currentUser.lastName}</li>
          <li>Username: {currentUser.username}</li>
          <li>Email: {currentUser.email}</li>
      </List> */}
    </div>

  )
}

export default Profile;