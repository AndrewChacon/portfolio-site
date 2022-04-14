import React, { useState } from 'react';
import './navbar.styles.css';

function Navbar() {
	const [toggleNav, setToggleNav] = useState(false);
	return (
		<div className='navbar__container'>
			<div className='navbar__graphic'>andrew</div>
			<div
				className='navbar__hamburger'
				onClick={() => setToggleNav(!toggleNav)}>
				x
			</div>
			<nav className={`navbar__collapse ${toggleNav ? 'hide' : ''}`}>
				<ul className='navbar__list'>
					<li
						className='navbar__item'
						onClick={() => console.log('toggle nav')}>
						about
					</li>
					<li
						className='navbar__item'
						onClick={() => console.log('toggle nav')}>
						projects
					</li>
					<li
						className='navbar__item active'
						onClick={() => console.log('toggle nav')}>
						contact
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;

/*
icon

real navbar
hamburger
about
projects
contact
*/
