import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import FriendList from './components/FriendList';
import SearchUser  from './components/SearchUser ';
import Recommendations from './components/Recommendations';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/friends" component={FriendList} />
                    <Route path="/search" component={SearchUser } />
                    <Route path="/recommendations" component={Recommendations} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;