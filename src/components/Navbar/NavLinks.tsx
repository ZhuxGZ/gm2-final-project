import { UserIcon } from '..';
import { Link } from 'react-router-dom';
import { useLoginStatus } from '../../hooks';
import { useEffect } from 'react';

export const NavLinks = () => {
	const { isLogged } = useLoginStatus();

	return (
		<ul className="nav-list">
			{isLogged && (
				<>
					<li className="nav-item">Metrics</li>
					<li className="nav-item">Cart</li>
					<li className="nav-item">Wishlist</li>
				</>
			)}
			<li className="nav-item">Shop</li>
			<li>
				<Link to={'/login'}>
					<UserIcon />
				</Link>
			</li>
		</ul>
	);
};
