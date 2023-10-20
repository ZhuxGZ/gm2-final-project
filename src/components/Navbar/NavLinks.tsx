import { UserIcon } from '..';
import { Link } from 'react-router-dom';
import { useLoginStatus } from '../../hooks';

export const NavLinks = () => {
	const { isLogged } = useLoginStatus();

	return (
		<ul className="nav-list">
			{isLogged && (
				<>
					<li className="nav-item">Metrics</li>
					<li className="nav-item">
						<Link to="Cart">Cart</Link>
					</li>
					<li className="nav-item">Whislist</li>
				</>
			)}
			<li className="nav-item">Shop</li>

			<Link to={isLogged ? '/profile' : '/login'}>
				<UserIcon />
			</Link>
		</ul>
	);
};
