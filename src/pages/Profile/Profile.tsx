import './Profile.css';
import { Table } from '../../components/Table';
import { useLoginStatus } from '../../hooks';

export const Profile = () => {
	const { userData } = useLoginStatus();
	return (
		<>
			<div className="Card">
				<div className="contentCard">
					<div className="post main">
						<div className="preview">
							<img className="img-profile" src={userData?.image} alt="" />
						</div>
						<div className="details-profile">
							<div className="full-name">
								<h3>Full name</h3>
								<p>{`${userData?.firstName} ${userData?.lastName}`}</p>
							</div>
							<div className="username">
								<h3>Username</h3>
								<p>{userData?.username}</p>
							</div>
							<div className="email">
								<h3>Email</h3>
								<p>{userData?.email}</p>
							</div>
							<div className="gender">
								<h3>Gender</h3>
								<p>{userData?.gender}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="tableComponent">
				<Table />
			</div>
		</>
	);
};
