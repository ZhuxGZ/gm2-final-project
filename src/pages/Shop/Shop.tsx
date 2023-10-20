import { CardView } from '../../components/CardView';
import { Filter } from '../../components';
import './Shop.css';
export const Shop = () => {
	return (
		<section className="shop-page">
			<Filter />
			<CardView />
		</section>
	);
};
