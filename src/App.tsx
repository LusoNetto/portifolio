import AboutSection from "./Pages/Home/sections/AboutSection/AboutSection"
import HeroSection from "./Pages/Home/sections/HeroSection/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import ProjectsSection from "./Pages/Home/sections/ProjectsSection/ProjectsSection"
import CertificationSection from "./Pages/Home/sections/CertificationsSection/CertificationsSection"
import Footer from "./components/Footer/Footer"

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificationSection />
      <Footer />
    </>
  )
}

export default App
