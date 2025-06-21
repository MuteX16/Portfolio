import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProfileSection from './components/ProfileSection';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ProfileSection style={{ animationDelay: '0.2s' }} />
    <AboutMe style={{ animationDelay: '0.4s' }} />
    <Skills style={{ animationDelay: '0.6s' }} />
    <Projects style={{ animationDelay: '0.8s' }} />
    <Achievements style={{ animationDelay: '0.9s' }} />
    <Certificates style={{ animationDelay: '1.0s' }} />
    <Contact style={{ animationDelay: '1.2s' }} />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
