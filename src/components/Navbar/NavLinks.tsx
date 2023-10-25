import { UserIcon } from '..';
import { Link } from 'react-router-dom';
import { useCart, useLoginStatus } from '../../hooks';
import { CartSvg } from './CartSvg';

export const NavLinks = () => {
	const { isLogged } = useLoginStatus();
	const { cartQuantity } = useCart();

	return (
		<ul className="nav-list">
			{isLogged && (
				<>
					<li className="nav-item">Metrics</li>
					<li className="nav-item">
						<Link to="/wishlist">Whislist</Link>
					</li>
				</>
			)}
			<li className="nav-item">
				<Link to="/shop">Shop</Link>
			</li>

			{isLogged && (
				<li className="nav-item nav-cart">
					<Link to="/cart">
						<CartSvg />
						<span className="nav-cartQuantity">{cartQuantity}</span>
					</Link>
				</li>
			)}

			<Link to={isLogged ? '/profile' : '/login'}>
				<UserIcon />
			</Link>
		</ul>
	);
};
