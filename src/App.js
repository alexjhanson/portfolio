import './App.scss';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Music from './pages/Music/Music';
import Navigation  from './components/Navigation/Navigation';
import SocialLinks from './components/SocialLinks/SocialLinks';
import { useEffect, useState } from 'react';


export default function App() {

  const [mobile, setMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {

    function handleResize() {
      setMobile(window.innerWidth <= 800);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Navigation mobile={mobile}/>
      <Routes>
        <Route path="/" element={<Navigate to='/about'/>}/>
        <Route path="/about" element={<About mobile={mobile}/>}/>
        <Route path ="/projects" element={<Projects mobile={mobile}/>}/>
        <Route path ="/music" element={<Music mobile={mobile}/>}/>
      </Routes>
     
      <SocialLinks mobile={mobile}/>
    </div>
  );
}

