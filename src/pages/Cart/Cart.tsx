import { useCart } from '../../hooks';
import './Cart.css';

export const Cart = () => {
	const { cartList } = useCart();
	return (
		<div className="cart-container">
			<div className="cart-top">
				<h1 className="cart-title">Cart</h1>
				<button className="cart-buy">Buy</button>
			</div>
		</div>
	);
};
