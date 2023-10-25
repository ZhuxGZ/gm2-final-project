import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product, useLoginStatus } from '.';
import { toast } from 'sonner';

type WishlistProvider = {
	addWishlist: (product: Product) => void;
	delWishlist: (index: number) => void;
	wishlist: Product[];
};

const WishlistContext = createContext({} as WishlistProvider);
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
	const [wishlist, setWishlist] = useState<Product[]>([]);
	const { isLogged } = useLoginStatus();
	const navigate = useNavigate();
	const localStorageCart = JSON.parse(localStorage.getItem('wishlist') as string);

	useEffect(() => {
		if (localStorageCart !== null) setWishlist(localStorageCart);
		console.log(wishlist);
	}, []);

	useEffect(() => {
		localStorage.setItem('wishlist', JSON.stringify(wishlist));
	}, [wishlist]);

	const addWishlist = (product: Product) => {
		if (wishlist.includes(product)) {
			toast.error('This product is already on your wishlist');
			return;
		}
		if (isLogged) {
			const newWishlist = [...wishlist];
			newWishlist.push(product);
			setWishlist(newWishlist);
			toast.success('Added to your wishlist');
		} else {
			navigate('/login');
		}
	};

	const delWishlist = (index: number) => {
		if (isLogged) {
			const newWishlist = [...wishlist];
			newWishlist.splice(index, 1);
			setWishlist(newWishlist);
			toast.error('Product deleted from your wishlist');
		} else {
			navigate('/login');
		}
	};

	return (
		<WishlistContext.Provider value={{ addWishlist, delWishlist, wishlist }}>
			{children}
		</WishlistContext.Provider>
	);
};
