import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProfileSection from './ProfileSection';
import Header from './Header';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ProfileSection />
    <AboutMe />
    <Skills />
    <Projects />
    <Contact />
    {/* Add more sections as needed */}
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
