import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Product } from '.';

type CartProvider = {
	updateCartList: (product: Product) => void;
	cartList: Product[];
};

const CartContext = createContext({} as CartProvider);
export const useCart = () => useContext(CartContext);

let firstTime = 0;

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartList, setCartList] = useState<Product[]>([]);
	useEffect(() => {
		if (cartList.length) {
			localStorage.setItem('cartList', JSON.stringify(cartList));
			firstTime++;
		}
	}, [cartList]);

	const updateCartList = (product: Product) => {
		const newCartList = [...cartList];
		const localStorageCart = JSON.parse(localStorage.getItem('cartList') as string);

		if (firstTime === 0 && localStorageCart !== null) {
			newCartList.push(...localStorageCart);
		}

		newCartList.push(product);
		setCartList(newCartList);
	};

	return (
		<CartContext.Provider value={{ cartList, updateCartList }}>{children}</CartContext.Provider>
	);
};
