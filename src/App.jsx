/**
 * @copyright 2024 Snowflake
 * @licence Apache-2.0
 */

/**
 * Node Modules
 */
import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Review from "./components/Review";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";


// register gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);


const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: '-200 bottom',
          end: 'bottom 80%'
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      })
    })
  });

  return (
      <ReactLenis root>
        <Header />
        <main>
          <Hero />
          <About />
          <Work />
          <Review />
          <Contacts />
        </main>
        <Footer />
      </ReactLenis>

  )
 
}


export default App;