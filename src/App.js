import './App.scss';
import './App.css';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import Header from './components/Header/Header';
import About from './pages/About/About';
// import Projects from './pages/Projects/Projects';
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
      <Navigation />
      <About mobile={mobile}/>
      <SocialLinks mobile={mobile}/>
    </div>
  );
}

// eslint-disable-next-line
{/* <div className="App">
{ mobile ? <MobileNav /> : <Header /> }

    <Routes>
      <Route path="/" element={<Navigate to='/about'/>}/>
      <Route path="/about" element={<About mobile={mobile} />}/>
      <Route path ="/projects" element={<Projects />}/>
    </Routes>
    { mobile ? <MobileSocial /> : null }

</div> */}