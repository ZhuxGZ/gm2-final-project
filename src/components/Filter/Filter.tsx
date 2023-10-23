import { useState } from 'react';
import './Filter.css';
import { useProducts } from '../../hooks';

export const Filter = ({ setSearchText, setPriceMinMax, setCategory, state }) => {
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(2000);
	const { productCategories } = useProducts();

	function handleSearch(event) {
		setSearchText(event.target.value);
	}

	const handlePriceQuantity = () => {
		setPriceMinMax({ min: minPrice, max: maxPrice });
	};

	return (
		<div className="content-filter">
			<div className="filter-title">
				<h2>Filters</h2>
			</div>
			<div className="filter-description container-filter filter-center">
				<h3>Name Descripton Brand</h3>
				<input type="text" placeholder="Search" onChange={handleSearch} />
			</div>
			<div className="filter-minprice container-filter filter-center">
				<h3>Min Price</h3>
				<input
					type="range"
					min={0}
					max={2000}
					defaultValue={minPrice}
					onChange={(event) => {
						setMinPrice(Number(event.target.value));
						handlePriceQuantity();
					}}
				/>
			</div>
			<div className="filter-maxprice container-filter filter-center">
				<h3>Max Price</h3>
				<input
					type="range"
					min={0}
					max={2000}
					defaultValue={maxPrice}
					onChange={(event) => {
						setMaxPrice(Number(event.target.value));
						handlePriceQuantity();
					}}
				/>
			</div>
			<div className="filter-categories container-filter filter-center">
				<h3>Categories</h3>
				<select name="" id="" onChange={(event) => setCategory(event.target.value)}>
					<option value="">All</option>
					{productCategories.map((category) => {
						return (
							<option key={category} value={category}>
								{category}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};
