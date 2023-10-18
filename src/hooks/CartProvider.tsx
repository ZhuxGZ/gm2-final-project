import { ReactNode, createContext, useContext, useState } from 'react';
import { Product } from '.';

const CartContext = createContext({});
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
