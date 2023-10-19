import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product, useLoginStatus } from '.';

type CartProvider = {
	updateCartList: (product: Product) => void;
	cartList: Product[];
};

const CartContext = createContext({} as CartProvider);
export const useCart = () => useContext(CartContext);

let firstTime = 0;

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartList, setCartList] = useState<Product[]>([]);
	const { isLogged } = useLoginStatus();
	const navigate = useNavigate();

	useEffect(() => {
		setCartList(JSON.parse(localStorage.getItem('cartList') as string));
	}, []);

	useEffect(() => {
		if (cartList.length) {
			localStorage.setItem('cartList', JSON.stringify(cartList));
			firstTime++;
		}
	}, [cartList]);

	const updateCartList = (product: Product) => {
		if (isLogged) {
			const newCartList = [...cartList];
			const localStorageCart = JSON.parse(localStorage.getItem('cartList') as string);

			if (firstTime === 0 && localStorageCart !== null) {
				newCartList.push(...localStorageCart);
			}

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
