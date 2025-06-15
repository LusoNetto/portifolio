import AboutSection from "./Pages/Home/sections/AboutSection/AboutSection"
import HeroSection from "./Pages/Home/sections/HeroSection/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import ProjectsSection from "./Pages/Home/sections/ProjectsSection/ProjectsSection"
import CertificationSection from "./Pages/Home/sections/CertificationsSection/CertificationsSection"
import Footer from "./components/Footer/Footer"
import { Route, Routes } from "react-router"
import ProjectsReactThreeFiberSection from "./Pages/ReactThreeFiber/ProjectsReactThreeFiberSection/ProjectsReactThreeFiberSection"

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/portifolio" element={
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ProjectsReactThreeFiberSection />
          <CertificationSection />
          <Footer />
        </>
      } />
    </Routes>
  )
}

export default App
