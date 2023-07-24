// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import S140 from './pages/S140'; // Importe o componente S140


const Page2 = () => <div>Página 2</div>;
const Page3 = () => <div>Página 3</div>;
const Page4 = () => <div>Página 4</div>;
const Page5 = () => <div>Página 5</div>;
const Page6 = () => <div>Página 6</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/S140" element={<S140 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
      </Routes>
    </Router>
  );
};

export default App;
