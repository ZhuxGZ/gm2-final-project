import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks';
import './Product.css';

export const Product = () => {
	const { id } = useParams();
	const productList = useProducts();
	const product = productList.filter((product) => product.id == id);
	console.log(product[0]);

	return (
		<section className="prod-page">
			<section className="prod-container">
				<section className="prod-images">
					<section className="prod-main-image"></section>
					<section className="prod-all-image">
						<div className="all-image-image"></div>
						<div className="all-image-image"></div>
						<div className="all-image-image"></div>
						<div className="all-image-image"></div>
					</section>
				</section>
				<section className="prod-info">
					<h3 className="prod-info-title">{product[0]?.title}</h3>
					<p className="prod-info-description">{product[0]?.description}</p>
					<section className="prod-bottom">
						<section className="prod-prices">
							<p className="prod-info-price">${product[0]?.price}</p>
							<p className="prod-info-discount">$200</p>
						</section>
						<section className="prod-buttons">
							<button className="prod-add-to-favorite">Add to favorites</button>
							<button className="prod-buy">Buy</button>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};
