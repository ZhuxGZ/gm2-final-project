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
						<Link to="/cart">Cart</Link>
					</li>
					<li className="nav-item">
						<Link to="/wishlist">Whislist</Link>
					</li>
				</>
			)}
			<li className="nav-item">
				<Link to="/shop">Shop</Link>
			</li>

			<Link to={isLogged ? '/profile' : '/login'}>
				<UserIcon />
			</Link>
		</ul>
	);
};
