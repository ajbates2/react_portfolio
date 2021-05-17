import { useState } from 'react';
import NavList from './NavList';
import './Nav.css';

export default function NavMenu() {
	const [menu, openMenu] = useState(false);

	return (
		<nav className='nav_container'>
			<button
				className='menu_button'
				onClick={() => openMenu(!menu)}
				aria-label='menu button'
			>
				<input
					className='menu_button__checkbox'
					aria-label='menu button checkbox'
					type='checkbox'
					onChange={() => openMenu(!menu)}
					checked={menu}
				/>
				<span className='menu_button__bar'> </span>
				<span className='menu_button__bar'> </span>
				<span className='menu_button__bar'> </span>
			</button>
			<NavList menuState={menu} closeMenu={() => openMenu(!menu)} />
		</nav>
	);
}
