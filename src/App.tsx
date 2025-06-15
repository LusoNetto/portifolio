import AboutSection from "./Pages/Home/sections/AboutSection/AboutSection"
import HeroSection from "./Pages/Home/sections/HeroSection/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import ProjectsSection from "./Pages/Home/sections/ProjectsSection/ProjectsSection"
import CertificationSection from "./Pages/Home/sections/CertificationsSection/CertificationsSection"
import Footer from "./components/Footer/Footer"
import { Route, Routes } from "react-router"
import SimpleBoxSection from "./Pages/ReactThreeFiber/sections/SimpleBoxSection/SimpleBoxSection"

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/portifolio" element={
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <CertificationSection />
          <Footer />
        </>
      } />
      <Route path="/portifolio/react-fiber-three" element={
        <>
          <SimpleBoxSection />
        </>
      } />
    </Routes>
  )
}

export default App
