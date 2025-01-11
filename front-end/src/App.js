import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import FriendList from './components/FriendList';
import SearchUser  from './components/SearchUser ';
import Recommendations from './components/Recommendations';
// import UserProfile from './components/UserProfile'; 

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/friends" element={<FriendList />} />
                    <Route path="/search" element={<SearchUser  />} />
                    <Route path="/recommendations" element={<Recommendations />} />
                    {/* <Route path="/profile" element={<User Profile />} />  */}
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;