import { ReactNode, createContext, useContext, useState } from 'react';
import { Product } from '.';

type CartProvider = {
	updateCartList: (product: Product) => void;
	cartList: Product[];
};

const CartContext = createContext({} as CartProvider);
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartList, setCartList] = useState<Product[]>([]);

	const updateCartList = (product: Product) => {
		const newCartList = [...cartList];
		newCartList.push(product);
		setCartList(newCartList);
	};

	return (
		<CartContext.Provider value={{ cartList, updateCartList }}>{children}</CartContext.Provider>
	);
};
