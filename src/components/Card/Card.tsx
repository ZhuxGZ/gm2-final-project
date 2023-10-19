import { Product } from '../../hooks';
import { calculateDiscount } from '../../utils';
import './Card.css';

export const Card = ({ props }: { props: Product }) => {
	const { title, desciption, price, discountPercentage, rating, stock, images } = props;
	return (
		<>
			<div className="structure-card">
				<div className="img-rating-container">
					<img className="card-img" src={images[0]} />
					<p className="card-rating">#{rating}</p>
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
					<button className="buttons-container">Wishlist</button>
					<button className="buttons-container">Cart</button>
				</div>
			</div>
		</>
	);
};
