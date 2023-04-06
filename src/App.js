import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import MobileNav  from './components/MobileNav/MobileNav';
import MobileSocial from './components/MobileSocial/MobileSocial';

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
      { mobile ? <MobileNav /> : <Header /> }
      
          <Routes>
            <Route path="/" element={<Navigate to='/about'/>}/>
            <Route path="/about" element={<About mobile={mobile} />}/>
            <Route path ="/projects" element={<Projects />}/>
          </Routes>
          { mobile ? <MobileSocial /> : null }
    
    </div>
  );
}


