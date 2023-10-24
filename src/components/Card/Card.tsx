import { Link } from 'react-router-dom';
import { Product, useCart, useWishlist } from '../../hooks';
import { calculateDiscount } from '../../utils';
import './Card.css';

export const Card = ({
	props,
	index,
	section,
}: {
	props: Product;
	index: number;
	section?: string;
}) => {
	const { id, title, price, discountPercentage, rating, stock, images } = props;
	const { delCartList, addCartList } = useCart();
	const { addWishlist, delWishlist } = useWishlist();

	return (
		<div className="structure-card">
			<div className="img-rating-container">
				<Link to={`/product/${id}`}>
					<img className="card-img" src={images[0]} />
					<p className="card-rating">#{rating}</p>
				</Link>
			</div>
			<div className="card-info">
				<h1 className="product-name">{title}</h1>
				<div className="product-number-data">
					<div className="prices">
						<p className="original-price">${price}</p>
						<p className="price-with-discount">${calculateDiscount(price, discountPercentage)}</p>
						<p className="stock">Stock: {stock}</p>
					</div>
				</div>
			</div>

			<div className="card-buttons">
				{section === 'cart' || section === 'wishlist' ? (
					<button
						className="buttons-container"
						onClick={() => (section === 'cart' ? delCartList(index) : delWishlist(index))}
					>
						Remove
					</button>
				) : (
					<>
						<button className="buttons-container" onClick={() => addWishlist(props)}>
							Wishlist
						</button>
						<button className="buttons-container" onClick={() => addCartList(props)}>
							Cart
						</button>
					</>
				)}
			</div>
		</div>
	);
};
