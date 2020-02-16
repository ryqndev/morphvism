import React from 'react';
import { MemoryRouter as Router, Route, Switch, Link } from 'react-router-dom';
import user from './Firebase';
import Form from './Form';
import View from './View';
import './Start.scss';

const Start = () => {
    const logout = () => {
        user.logout();
    }
    return (
        <Router initialEntries={['/start', '/form', '/view']} initialIndex={0}>
            <Switch>
                <Route exact path='/start'>
                    <div className="start-header">
                        <div className="greeting">Hello, {JSON.parse(localStorage.getItem('user')).name}</div>
                        <div className="logout" onClick={logout}>logout</div>
                    </div>
                    <div className="start-wrapper">
                        Welcome to <span>Morphvism</span>!
                        <div className="box-holder">
                            <Link to="/form">
                                <div className="box">
                                    <p>Start a new room</p>
                                    <h3>Create New</h3>
                                </div>
                            </Link>
                            <Link to="/view">
                                <div className="box">
                                    <p>Visualize a current room</p>
                                    <h3>Join Room</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Route>
                <Route exact path='/form' component={Form} />
                <Route path='/view'>
                    <div className="view-container">
                        <View />
                        <View />
                    </div>

                </Route>
            </Switch>
        </Router>
    );
}

export default Start;