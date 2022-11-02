import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"


function App() {
  

  return (
    <div className="bg-gray-400 dark:bg-gray-400">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <SocialLinks />
      <Contact/>
    </div>
  )
}

export default App
