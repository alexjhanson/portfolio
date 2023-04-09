import './App.scss';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Music from './pages/Music/Music';
import EmailForm from './pages/EmailForm/EmailForm';
import Navigation  from './components/Navigation/Navigation';
import SocialLinks from './components/SocialLinks/SocialLinks';
import ResumeDialog from './components/ResumeDialog/ResumeDialog';


export default function App() {

  const[state, setState] = useState({
    mobile: window.innerWidth <= 800,
    resume: {
      display: false,
      x: 0,
      y: 0,
    }
  })

  useEffect(() => {

    function handleResize() {
      let tmp = {...state};
      tmp.mobile = window.innerWidth <= 800;
      setState(tmp);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleResumeClick(x, y) {

      let tmp = {...state}

      if(!state.mobile) {
        tmp.resume.x = tmp.resume.x ? tmp.resume.x : x + 70;
        tmp.resume.y = tmp.resume.y ? tmp.resume.y : x + 15;
      } else {
        tmp.resume.x = 0;
        tmp.resume.y = 0;
      }
      
      tmp.resume.display = true;

      setState(tmp);
  }

  function handleCloseResumeDialog() {
    let tmp = {...state};
    tmp.resume.display =false;
    setState(tmp);
  }

  return (
    <div className="App">
      <Navigation mobile={state.mobile}/>
      <Routes>
        <Route path="/" element={<Navigate to='/about'/>}/>
        <Route path="/about" element={<About mobile={state.mobile} handleResumeClick={handleResumeClick}/>}/>
        <Route path ="/projects" element={<Projects mobile={state.mobile}/>}/>
        <Route path ="/music" element={<Music/>}/>
        <Route path ="/contact" element={<EmailForm/>}/>
      </Routes>
      <SocialLinks mobile={state.mobile} handleResumeClick={handleResumeClick}/>
      <ResumeDialog resume={state.resume} handleCloseResumeDialog={handleCloseResumeDialog}/>
    </div>
  );
}

