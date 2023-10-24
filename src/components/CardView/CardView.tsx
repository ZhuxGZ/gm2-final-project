import { Card } from '..';
import './CardView.css';
import { Product } from '../../hooks';

const SECTIONS = {
	wishlist: 'wishlist',
	cart: 'cart',
};

export type Sections = keyof typeof SECTIONS | undefined;

export const CardView = ({ products, section }: { products: Product[]; section?: Sections }) => {
	return (
		<div className="cards-container">
			{products?.map((product, index) => {
				return (
					<Card key={`${product.id}.${index}`} index={index} props={product} section={section} />
				);
			})}
		</div>
	);
};
