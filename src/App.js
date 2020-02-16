import React, {useEffect} from 'react';
import { MemoryRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import user from './Firebase';
import Form from './Form';
import Login from './Login';
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
				<Form />
			</Route>
		</Switch>
	);
}

export default withRouter(App);
