import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import Login from './components/login/login';
import Notification from './components/notification/notification';
import React, { useState } from 'react';
const App = () => {
	const user = true;
	return (
		<div className="container">
			{user ? (
				<>
					<List />
					<Chat />
					<Detail />
				</>
			) : (
				<Login />
			)}
			<Notification />
		</div>
	);
};

export default App;
