import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

export default function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to='/about'/>}/>
        <Route path="/about" element={<About />}/>
        <Route path ="/projects" element={<Projects />}/>
      </Routes>
    </div>
  );
}


