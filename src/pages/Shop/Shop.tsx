import './Shop.css';
import { useState } from 'react';
import { Filter } from '../../components';
import { CardView } from '../../components/CardView';
import { useProducts } from '../../hooks';

export const Shop = () => {
	const [searchTerm, setSearchText] = useState<string>('');

	const products = useProducts();
	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	console.log(filteredProducts);
	return (
		<section className="shop-page">
			<Filter setSearchText={setSearchText} />
			<CardView filteredProducts={filteredProducts} />
		</section>
	);
};
