import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product, useLoginStatus } from '.';
import { toast } from 'sonner';

type CartProvider = {
	addCartList: (product: Product) => void;
	delCartList: (index: number) => void;
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
		localStorage.setItem('cartList', JSON.stringify(cartList));
	}, [cartList]);

	const addCartList = (product: Product) => {
		if (isLogged) {
			const newCartList = [...cartList];
			newCartList.push(product);
			setCartList(newCartList);
			toast.success('Product added to your cart');
		} else {
			navigate('/login');
		}
	};

	const delCartList = (index: number) => {
		if (isLogged) {
			const newCartList = [...cartList];
			newCartList.splice(index, 1);
			setCartList(newCartList);
			toast.error('Product removed from your cart');
		} else {
			navigate('/login');
		}
	};

	return (
		<CartContext.Provider value={{ cartList, addCartList, delCartList }}>
			{children}
		</CartContext.Provider>
	);
};
