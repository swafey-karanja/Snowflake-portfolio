/**
 * @copyright 2024 Snowflake
 * @licence Apache-2.0
 */

/**
 * Components
 */
import Header from "./components/header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Review from "./components/Review";
import Contacts from "./components/Contacts";


const App = () => {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Review />
        <Contacts />
      </main>
    </>
  )
 
}


export default App;