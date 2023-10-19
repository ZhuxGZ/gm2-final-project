import { useCart } from '../../hooks';
import { Card } from '../../components';
import './Cart.css';

export const Cart = () => {
	const { cartList } = useCart();
	console.log(cartList);
	return (
		<div className="cart-container">
			<section className="cart-top">
				<h1 className="cart-title">Cart</h1>
				<button className="cart-buy">Buy</button>
			</section>
			<section className="cart-product-display">
				{cartList.map((product, index) => {
					return <Card key={product.id + index} />;
				})}
			</section>
		</div>
	);
};
