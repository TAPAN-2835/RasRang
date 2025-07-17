import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

import { navLinks } from '../../constants/index.js'

const Navbar = () => {
 // Removed GSAP navTween for background
 return (
	<nav>
	 <div>
		<a href="#hero" className="flex items-center gap-2">
		 <img src="/images/logo.png" alt="logo" />
		 <p>Ras Rang</p>
		</a>
		<ul>
		 {navLinks.map((link) => (
			<li key={link.id}>
			 <a href={`#${link.id}`}>{link.title}</a>
			</li>
		 ))}
		</ul>
	 </div>
	</nav>
 )
}
export default Navbar
