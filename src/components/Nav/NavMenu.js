import { useState } from 'react';
import NavList from './NavList';
import './Nav.css';

export default function NavMenu() {
	const [menu, openMenu] = useState(false);

	return (
		<nav className='nav_container'>
			<button className='menu_button' onClick={() => openMenu(!menu)}>
				<input className='menu_button__checkbox' type='checkbox' />
				<span className='menu_button__bar'> </span>
				<span className='menu_button__bar'> </span>
				<span className='menu_button__bar'> </span>
			</button>
			<NavList menuState={menu} closeMenu={() => openMenu(!menu)} />
		</nav>
	);
}
