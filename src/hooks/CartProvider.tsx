import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product, useLoginStatus } from '.';

type CartProvider = {
	updateCartList: (product: Product) => void;
	cartList: Product[];
};

const CartContext = createContext({} as CartProvider);
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartList, setCartList] = useState<Product[]>([]);
	const { isLogged } = useLoginStatus();
	const navigate = useNavigate();
	const localStorageCart = JSON.parse(localStorage.getItem('cartList') as string);

	useEffect(() => {
		if (localStorageCart !== null) setCartList(localStorageCart);
		console.log(cartList);
	}, []);

	useEffect(() => {
		if (cartList.length) {
			localStorage.setItem('cartList', JSON.stringify(cartList));
		}
	}, [cartList]);

	const updateCartList = (product: Product) => {
		if (isLogged) {
			const newCartList = [...cartList];
			newCartList.push(product);
			setCartList(newCartList);
		} else {
			navigate('/login');
		}
	};

	return (
		<CartContext.Provider value={{ cartList, updateCartList }}>{children}</CartContext.Provider>
	);
};
