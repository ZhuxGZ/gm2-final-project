import { Link } from 'react-router-dom';
import { Logo } from '..';

export const NavBrand = () => {
	return (
		<div className="brand">
			<Link to="/">
				<Logo />
			</Link>
			<p>The best ecommerce ever</p>
		</div>
	);
};
