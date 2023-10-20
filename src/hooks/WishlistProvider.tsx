import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product, useLoginStatus } from '.';

type WishlistProvider = {
	addWishlist: (product: Product) => void;
	delWishlist: (index: number) => void;
	wishlist: Product[];
};

const CartContext = createContext({} as WishlistProvider);
export const useWishlist = () => useContext(CartContext);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
	const [wishlist, setWishlist] = useState<Product[]>([]);
	const { isLogged } = useLoginStatus();
	const navigate = useNavigate();
	const localStorageCart = JSON.parse(localStorage.getItem('wishlist') as string);

	useEffect(() => {
		if (localStorageCart !== null) setCartList(localStorageCart);
		console.log(wishlist);
	}, []);

	useEffect(() => {
		localStorage.setItem('wishlist', JSON.stringify(wishlist));
	}, [wishlist]);

	const addWishlist = (product: Product) => {
		if (isLogged) {
			const newWishlist = [...wishlist];
			newWishlist.push(product);
			setWishlist(newWishlist);
		} else {
			navigate('/login');
		}
	};

	return <CartContext.Provider value={{ addWishlist, wishlist }}>{children}</CartContext.Provider>;
};
