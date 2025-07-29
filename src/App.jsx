import LogoSection from "./section/LogoSection"
import NavBar from "./component/NavBar"
import Hero from "./section/Hero"
import ShowCaseSection from "./section/ShowCaseSection"
import FeatureSection from "./section/FeatureSection"
import Experience from "./section/Experience"
import TechStack from "./section/TechStack"
import Testimonials from "./section/Testimonials"
import Contact from "./section/Contact"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeatureSection />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App