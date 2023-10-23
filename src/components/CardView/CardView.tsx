import { Card } from '..';
import './CardView.css';
import { Product } from '../../hooks';

export const CardView = ({ filteredProducts }: { filteredProducts: Product[] }) => {
	return (
		<div className="cards-container">
			{filteredProducts?.map((product) => {
				return <Card key={product.id} props={product} />;
			})}
		</div>
	);
};
