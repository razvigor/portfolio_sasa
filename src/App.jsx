import Landing from './components/Landing/Landing';
import ProjectList from './components/ProjectList/ProjectList';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Social from './components/Social/Social';
import Navbar from './components/NavBar/NavBar';
import Mouse from './components/UI/Mouse';
import { useState } from 'react';
import Preloader from './components/Preloader/Preloader';
import ScrollToHashElement from './components/UI/ScrollToHashElement';
import { LanguageProvider } from './context/Language';
import Footer from './components/Footer/Footer';
import Couerses from './components/Courses/Couerses';
import Expirience from './assets/Expirience/Expirience';
import Logo from './assets/ST_Logo.png';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          <LanguageProvider>
            <ScrollToHashElement />
            <Mouse />
            <Navbar />
            <Social />
            <Landing />

            <About />
            <Expirience />
            <ProjectList />
            <Couerses />
            <img src={Logo} alt='logo' />
            <Contact />
            <Footer />
          </LanguageProvider>
        </>
      )}
    </>
  );
}

export default App;
