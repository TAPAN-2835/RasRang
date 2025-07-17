import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

import { navLinks } from '../../constants/index.js'

const Navbar = () => {
 // Removed GSAP navTween for background
 return (
	<nav role="navigation" aria-label="Main Navigation">
	 <div>
		<a href="#hero" className="flex items-center gap-2" aria-label="Go to home section">
		 <img src="/images/logo.png" alt="logo" />
		 <p>Ras Rang</p>
		</a>
		<ul>
		 {navLinks.map((link) => (
			<li key={link.id}>
			 <a href={`#${link.id}`} tabIndex={0} aria-label={`Go to ${link.title} section`} style={{ color: '#fff', textShadow: '0 1px 2px #000' }}>{link.title}</a>
			</li>
		 ))}
		</ul>
	 </div>
	</nav>
 )
}
export default Navbar
