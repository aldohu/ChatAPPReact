import { useEffect, useRef, useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState('');

	const endRef = useRef(false);

	useEffect(() => {
		endRef.current?.scrollIntoView({ behavior: 'smooth' });
	});
	const handleEmoji = (e) => {
		setText((prev) => prev + e.emoji);
		setOpen(false);
	};

	return (
		<div className="chat">
			<div className="top">
				Top
				<div className="user">
					<img
						src="./avatar.png"
						alt=""
					/>
				</div>
				<div className="texts">
					<span>Jane Doe</span>
					<p>lorem ipsu dois mois pois gois</p>
				</div>
				<div className="icons">
					<img
						src="phone.png"
						alt=""
					/>
					<img
						src="video.png"
						alt=""
					/>
					<img
						src="info.png"
						alt=""
					/>
				</div>
			</div>
			<div className="center">
				Center
				<div className="message">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<p>lorem dads asda sdasad vcvdf asdaw d</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className="message own">
					<div className="texts">
						<p>lorem dads asda sdasad vcvdf asdaw d</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className="message">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<p>lorem dads asda sdasad vcvdf asdaw d</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className="message own">
					<div className="texts">
						<p>lorem dads asda sdasad vcvdf asdaw d</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className="message">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<p>lorem dads asda sdasad vcvdf asdaw d</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className="message own">
					<div className="texts">
						<p>lorem dads asda sdasad vcvdf asdaw d</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className="message">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<p>lorem dads asda sdasad vcvdf asdaw d</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className="message own">
					<div className="texts">
						<p>lorem dads asda sdasad vcvdf asdaw d</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className="message">
					<img
						src="./avatar.png"
						alt=""
					/>
					<div className="texts">
						<img src="https://images.unsplash.com/photo-1713781317896-75f337b2db2a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" />
						<p>lorem dads asda sdasad vcvdf asdaw d</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div className="message own">
					<div className="texts">
						<p>lorem dads asda sdasad vcvdf asdaw d</p>
						<span>1 min ago</span>
					</div>
				</div>
				<div ref={endRef}></div>
			</div>
			<div className="bottom">
				Bottom
				<div className="icons">
					<img
						src="img.png"
						alt=""
					/>
					<img
						src="camera.png"
						alt=""
					/>
					<img
						src="mic.png"
						alt=""
					/>
				</div>
				<input
					type="text"
					className="input"
					placeholder="Type a message..."
					onChange={(e) => setText(e.target.value)}
					value={text}
				/>
				<div className="emoji">
					<img
						src="./emoji.png"
						alt=""
						onClick={() => setOpen((prev) => !prev)}
					/>
					<div className="picker">
						<EmojiPicker
							open={open}
							onEmojiClick={handleEmoji}
						/>
					</div>
				</div>
				<button className="sentButton">Send</button>
			</div>
		</div>
	);
};

export default Chat;
