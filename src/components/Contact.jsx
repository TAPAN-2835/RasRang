import { openingHours, socials, storeInfo } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';
import { useRef } from 'react';

const Contact = () => {
  const socialsRef = useRef();
  const socialsHeadingRef = useRef();
  useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
	 .from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
	 .to('#f-right-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')

    // Socials animation
    gsap.fromTo(
      socialsHeadingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: socialsHeadingRef.current,
          start: 'top 80%',
        },
        ease: 'power2.out',
      }
    );
    gsap.fromTo(
      socialsRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: socialsRef.current,
          start: 'top 85%',
        },
        ease: 'power2.out',
      }
    );
	})
 
 return (
	<footer id="contact">
	 <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
	 <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
	 
	 <div className="content">
		<h2>Where to Find Us</h2>
		
		<div>
		 <h3>Visit Our Place</h3>
		 <p>{storeInfo.address}</p>
		</div>
		
		<div>
		 <h3>Contact Us</h3>
		 <p>{storeInfo.contact.phone}</p>
		 <p>{storeInfo.contact.email}</p>
		</div>
		
		<div>
		 <h3>Open Every Day</h3>
		 {openingHours.map((time) => (
			<p key={time.day}>
			 {time.day} : {time.time}
			</p>
		 ))}
		</div>
		
		<div>
		 <h3 className="socials-heading" ref={socialsHeadingRef}>Socials</h3>
		 <div className="flex-center gap-5 socials-icons" ref={socialsRef}>
			{socials.map((social) => (
			 <a
			 	key={social.name}
			 	href={social.url}
			 	tabIndex={0}
			 	aria-label={`Go to home section via ${social.name} icon`}
			 	className="social-icon-link"
			 >
				<img src={social.icon} className="social-icon-img" alt={social.name} style={{ filter: 'drop-shadow(0 1px 2px #000)' }} />
			 </a>
			))}
		 </div>
		</div>
		{/* Footer copyright */}
		<div className="text-center mt-8 text-white/60 text-sm">
		  © 2025 Ras Rang. Made by Tapan.
		</div>
	 </div>
	</footer>
 )
}

export default Contact
