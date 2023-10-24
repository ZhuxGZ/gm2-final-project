import { useState } from 'react';
import { CardView, Table } from '../../components/';
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
				{currentView === 'CardView' && <CardView products={wishlist} section="wishlist" />}
				{currentView === 'Table' && <Table />}
			</div>
		</div>
	);
};
