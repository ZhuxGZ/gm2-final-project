import { useState } from 'react';
import './Filter.css';
import { useProducts } from '../../hooks';
import { ArrowSvg } from '..';

export const Filter = ({ setSearchText, setPriceMinMax, setCategory }) => {
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(2000);
	const [state, setState] = useState(false);
	const { productCategories } = useProducts();
	const body = document.querySelector('body');

	function handleSearch(event) {
		setSearchText(event.target.value);
	}

	const handlePriceQuantity = () => {
		setPriceMinMax({ min: minPrice, max: maxPrice });
	};

	if (state) {
		body?.classList.add('no-scroll');
	} else {
		body?.classList.remove('no-scroll');
	}

	return (
		<div className={`container-filter ${state && 'open-filter'}`}>
			<p onClick={() => setState(!state)}>
				<ArrowSvg />
			</p>
			<div className={`content-filter ${state && 'open-filter'}`}>
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
		</div>
	);
};
