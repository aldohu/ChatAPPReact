import './detail.css';

const Detail = () => {
	return (
		<div className="detail">
			Detail
			<div className="user">
				<img src="./avatar.png" />
				<h2>Jane Doe</h2>
				<p>lorem ipsum does moes boes</p>
			</div>
			<div className="info">
				<div className="option">
					<div className="title">
						<span>Chat Settings</span>
						<img
							src="arrowUp.png"
							alt=""
						/>
					</div>
				</div>
				<div className="option">
					<div className="title">
						<span>Privacy & help</span>
						<img
							src="arrowUp.png"
							alt=""
						/>
					</div>
				</div>
				<div className="option">
					<div className="title">
						<span>Shared photos</span>
						<img
							src="arrowDown.png"
							alt=""
						/>
					</div>
					<div className="photos">
						<div className="photoItem">
							<div className="photoDetail">
								<img
									src="https://images.unsplash.com/photo-1713781317896-75f337b2db2a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
									alt=""
								/>
								<span>photo_2024_2.png</span>
							</div>
						</div>
						<img
							src="download.png"
							className="icon"
							alt=""
						/>
					</div>
				</div>
				<div className="option">
					<div className="title">
						<span>Shared Files</span>
						<img
							src="arrowUp.png"
							alt=""
						/>
					</div>
				</div>
				<button className="block">Block User</button>
				<button className="logout">Log Out</button>
			</div>
		</div>
	);
};

export default Detail;
