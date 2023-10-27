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
				{isLogged && (
					<>
						<li className="nav-item metrics">Metrics</li>
						<li className="nav-item wishlist">
							<Link to="/wishlist">Whislist</Link>
						</li>
					</>
				)}

				<li className={`nav-item shop  ${isLogged ? 'logged' : ''}`}>
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
