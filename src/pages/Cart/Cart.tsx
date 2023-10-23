import { useCart } from '../../hooks';
import { Card } from '../../components';
import './Cart.css';
import { calculateDiscount } from '../../utils';
import { useEffect, useState } from 'react';

export const Cart = () => {
	const { cartList } = useCart();
	const [totalCart, setTotalCart] = useState(0);
	useEffect(() => {
		let total = 0;

		cartList.forEach((product) => {
			total += calculateDiscount(product.price, product.discountPercentage);
		});

		setTotalCart(Number(total.toFixed(2)));
	}, [cartList]);

	return (
		<div className="cart-container">
			<section className="cart-top">
				<h1 className="cart-title">Cart</h1>
				<h2 className="cart-total"> Total: ${totalCart}</h2>
				<button className="cart-buy">Buy</button>
			</section>
			<section className="cart-product-display">
				{cartList &&
					cartList.map((product, index) => {
						return <Card key={product.id + index} props={product} index={index} section="cart" />;
					})}
			</section>
		</div>
	);
};
