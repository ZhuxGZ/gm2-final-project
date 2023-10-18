import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Product } from '.';

type CartProvider = {
	updateCartList: (product: Product) => void;
	cartList: Product[];
};

const CartContext = createContext({} as CartProvider);
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartList, setCartList] = useState<Product[]>([]);
	const cartLocalStorage = JSON.parse(localStorage.getItem('cartList'));

	useEffect(() => {
		if (cartLocalStorage) {
			setCartList(cartLocalStorage);
		} else {
			localStorage.setItem('cartList', JSON.stringify(cartList));
		}
	}, []);

	console.log(cartList);

	const updateCartList = (product: Product) => {
		const newCartList = [...cartLocalStorage];
		newCartList.push(product);
		localStorage.setItem('cartList', JSON.stringify(newCartList));
		setCartList(cartLocalStorage);
	};

	return (
		<CartContext.Provider value={{ cartList, updateCartList }}>{children}</CartContext.Provider>
	);
};
