import { useState } from 'react';

import NavBar from './screens/NavBar';
import Home from './screens/Home';
import AboutMe from './screens/AboutMe';
import Marker from './components/Marker';
import LearningPath from './screens/LearningPath';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
import Contact from './screens/Contact';
import Footer from './screens/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <div className="app">
        <AboutMe />
        <Skills />
        {/*  <LearningPath /> */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
