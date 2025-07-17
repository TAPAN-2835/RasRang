import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cocktails from './components/Cocktails.jsx'
import About from './components/About.jsx'
import Art from './components/Art.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <main>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Cocktails />
          <About />
          <Art />
          <Menu />
          <Contact />
        </>
      )}
    </main>
  )
}

export default App
