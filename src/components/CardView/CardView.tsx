import './CardView.css';
import { Card } from '..';
import { useProducts } from '../../hooks';

export const CardView = () => {
	const products = useProducts();

	return (
		<div className="cards-container">
			{products?.map((product) => {
				return <Card key={product.id} props={product} />;
			})}
		</div>
	);
};
