import React from 'react';
import SearchUser  from './SearchUser ';
// import Profile from './Profile';
import FriendList from './FriendList';

const Home = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-center">Welcome to the Home Page</h1>
            <SearchUser  />
            {/* <Profile /> */}
            <FriendList /> {/* Include the FriendList component here */}
        </div>
    );
};

export default Home;