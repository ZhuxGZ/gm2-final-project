import { useState, useEffect, useContext, createContext, ReactNode } from 'react';

export interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	brand: string;
	category: string;
	thumbnail: string;
	stock: number;
	images: string[];
}

export interface FetchResponse {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}

interface ProductContext {
	products: Product[];
	productCategories: string[];
}

const ProductsContext = createContext({} as ProductContext);

export const useProducts = () => {
	return useContext(ProductsContext);
};

interface ProductsProviderProps {
	children: ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
	const [products, setProducts] = useState<Product[]>([]);
	const productCategories = Array.from(new Set(products.map((product) => product.category).flat()));

	console.log(productCategories);

	useEffect(() => {
		fetch('https://dummyjson.com/products')
			.then((response) => response.json())
			.then((data) => setProducts(data.products));
	}, []);

	return (
		<ProductsContext.Provider value={{ products, productCategories }}>
			{children}
		</ProductsContext.Provider>
	);
};
