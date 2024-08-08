import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import HipHop from './components/HipHop/HipHop';
import Folk from './components/Folk/Folk';
import Country from './components/Country/Country';
import RB from './components/RB/RB';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/hiphop" element={<HipHop />} />
        <Route path="/folk" element={<Folk />} />
        <Route path="/country" element={<Country />} />
        <Route path="/rb" element={<RB />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
