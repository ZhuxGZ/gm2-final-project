import { useState } from 'react';
import { NavBrand } from './NavBrand';
import { NavLinks } from './NavLinks';
import './Navbar.css';
export const Navbar = () => {
	const [menuState, setMenuState] = useState(false);

	return (
		<nav className={menuState ? 'nav-open' : ''}>
			<NavBrand />
			<NavLinks menuState={menuState} setMenuState={setMenuState} />
		</nav>
	);
};
