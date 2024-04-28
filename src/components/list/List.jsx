import ChatList from './chatList/Chatlist.jsx';
import './list.css';
import Userinfo from './userinfo/Userinfo.jsx';

const List = () => {
	return (
		<div className="list">
			<Userinfo className="user" />
			<ChatList className="icons" />
		</div>
	);
};

export default List;
