import './Shop.css';
import { useState } from 'react';
import { Filter } from '../../components';
import { CardView } from '../../components/CardView';
import { useProducts } from '../../hooks';
import { calculateDiscount } from '../../utils';

export const Shop = () => {
	const [searchTerm, setSearchText] = useState<string>('');
	const [priceMinMax, setPriceMinMax] = useState({ min: 0, max: 2000 });
	const [category, setCategory] = useState('');

	const { products } = useProducts();
	const filteredProducts = products.filter(
		(product) =>
			(product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.brand.toLowerCase().includes(searchTerm.toLowerCase())) &&
			calculateDiscount(product.price, product.discountPercentage) > priceMinMax.min &&
			calculateDiscount(product.price, product.discountPercentage) < priceMinMax.max &&
			product.category.includes(category)
	);

	console.log(filteredProducts);
	return (
		<section className="shop-page">
			<Filter
				setSearchText={setSearchText}
				setPriceMinMax={setPriceMinMax}
				setCategory={setCategory}
			/>
			<CardView filteredProducts={filteredProducts} />
		</section>
	);
};
