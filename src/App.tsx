import { useContext } from "react";
import { AboutMeSection } from "./components/aboutMeSection";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { MainSection } from "./components/mainSection";
import { ProjectsSection } from "./components/projectsSection";
import { TechnologiesSection } from "./components/technologiesSection";
import { ContactModal } from "./components/contactModal";
import { GlobalStyles } from "./styles/globalstyles";
import { GlobalReset } from "./styles/reset";
import { ContactContext } from "./providers/contactContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const {modalIsOpen} = useContext(ContactContext);

  return (
    <>
      <ToastContainer />
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <main>
        <MainSection />
        <AboutMeSection />
        <TechnologiesSection />
        <ProjectsSection />
      </main>
      <Footer />
      { modalIsOpen && <ContactModal /> }
    </>
  )
}

export default App
