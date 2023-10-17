export const calculateDiscount = (price: number, discount: number): number => {
	return Number((price - price * (discount / 100)).toFixed(2));
};
