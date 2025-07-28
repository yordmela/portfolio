import LogoSection from "./section/LogoSection"
import NavBar from "./component/NavBar"
import Hero from "./section/Hero"
import ShowCaseSection from "./section/ShowCaseSection"
import FeatureSection from "./section/FeatureSection"
import Experience from "./section/Experience"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeatureSection />
      <Experience />
    </>
  )
}

export default App