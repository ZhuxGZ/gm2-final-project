import { useState } from 'react';
import { Card, Table } from '../../components/';
import './WishList.css';
import { useWishlist } from '../../hooks';

export const WhisList = () => {
	const [currentView, setCurrentView] = useState('CardView');
	const { wishlist } = useWishlist();

	const toggleView = () => {
		setCurrentView(currentView === 'CardView' ? 'Table' : 'CardView');
	};

	console.log(wishlist);

	return (
		<div className="wishList-content">
			<div className="wishlist-top">
				<h1>Wishlist</h1>
				<button className="change-button" onClick={toggleView}>
					Change View
				</button>
			</div>
			<div className="views-container">
				{currentView === 'CardView' && (
					<section className="cart-product-display">
						{wishlist &&
							wishlist.map((product, index) => {
								return (
									<Card key={product.id + index} props={product} index={index} section="wishist" />
								);
							})}
					</section>
				)}
				{currentView === 'Table' && <Table />}
			</div>
		</div>
	);
};
