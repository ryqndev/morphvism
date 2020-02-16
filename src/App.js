import React, {useEffect} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import user from './Firebase';
import Login from './Login';
import Start from './Start';
import './App.css';

function App({history}) {
	useEffect(() => {
		user.init();
		user.login.check( user => {
			history.push( user ? '/app' : '/login');
		});
	}, [history]);
	return (
		<Switch>
			<Route exact path='/'>
			</Route>
			<Route path='/login'>
				<Login />
			</Route>
			<Route path='/app'>
				<Start />
			</Route>
		</Switch>
	);
}

export default withRouter(App);
