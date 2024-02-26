import { lazy, Suspense } from 'react';
import Social from './components/Social/Social';
import Navbar from './components/NavBar/NavBar';
import Mouse from './components/UI/Mouse';
import Preloader from './components/Preloader/Preloader';
import ScrollToHashElement from './components/UI/ScrollToHashElement';
import { LanguageProvider } from './context/Language';
import Footer from './components/Footer/Footer';

const About = lazy(() => import('./components/About/About'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const ProjectList = lazy(() => import('./components/ProjectList/ProjectList'));
const Landing = lazy(() => import('./components/Landing/Landing'));
const Couerses = lazy(() => import('./components/Courses/Couerses'));
const Expirience = lazy(() => import('./assets/Expirience/Expirience'));

function App() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
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
          <Contact />
          <Footer />
        </LanguageProvider>
      </Suspense>
    </>
  );
}

export default App;
