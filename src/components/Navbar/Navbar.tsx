import { NavBrand } from './NavBrand';
import { NavLinks } from './NavLinks';
import './Navbar.css';
export const Navbar = () => {
	return (
		<nav>
			<NavBrand />
			<NavLinks />
		</nav>
	);
};
