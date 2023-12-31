import { useNavigate, useParams } from 'react-router-dom';
import { Product, useCart, useProducts } from '../../hooks';
import './Product.css';
import { calculateDiscount } from '../../utils';
import { ArrowSvg } from '../../components';

export const ProductPage = () => {
	const { id } = useParams();
	const { addCartList } = useCart();
	const { products } = useProducts();
	const product: Product[] = products.filter((product) => product.id === Number(id));
	const navigate = useNavigate();

	return (
		<section className="prod-page">
			<button className="prod-go-back" onClick={() => navigate('/shop')}>
				<ArrowSvg /> Shop
			</button>
			<section className="prod-container">
				<section className="prod-images">
					<section className="prod-main-image">
						<img className="prod-main-image" src={product[0]?.images[0]} alt="" />
					</section>
					<section className="prod-all-image">
						{product[0]?.images.map((images) => {
							return <img key={images} className="all-image-image" src={images} alt="" />;
						})}
					</section>
				</section>
				<section className="prod-info">
					<h3 className="prod-info-title">{product[0]?.title}</h3>
					<p className="prod-info-description">{product[0]?.description}</p>
					<section className="prod-bottom">
						<section className="prod-prices">
							<p className="prod-info-price">${product[0]?.price}</p>
							<p className="prod-info-discount">
								${calculateDiscount(product[0]?.price, product[0]?.discountPercentage)}
							</p>
						</section>
						<section className="prod-buttons">
							<button className="prod-add-to-favorite">Add to favorites</button>
							<button
								onClick={() => {
									addCartList(product[0]);
								}}
								className="prod-buy"
							>
								Add to cart
							</button>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};
