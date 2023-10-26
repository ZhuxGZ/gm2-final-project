import { UserIcon } from '..';
import { Link } from 'react-router-dom';
import { useCart, useLoginStatus } from '../../hooks';
import { CartSvg } from './CartSvg';
import { BurgerMenuSvg } from '../BurgerMenuSvg/BurgerMenuSvg';

export const NavLinks = (props) => {
	const { isLogged } = useLoginStatus();
	const { cartQuantity } = useCart();
	const { menuState, setMenuState } = props;
	const handleClick = () => {
		console.log(setMenuState(!menuState));
	};

	return (
		<>
			<ul className="nav-list">
				{isLogged && menuState && (
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

				{isLogged && menuState && (
					<li className="nav-item nav-cart">
						<Link to="/cart">
							<CartSvg />
							<span className="nav-cartQuantity">{cartQuantity}</span>
						</Link>
					</li>
				)}
			</ul>
			<ul className="user-menu">
				{isLogged && (
					<button className="burger-menu" onClick={handleClick}>
						<BurgerMenuSvg open={false} />
					</button>
				)}
				<Link to={isLogged ? '/profile' : '/login'}>
					<UserIcon />
				</Link>
			</ul>
		</>
	);
};
