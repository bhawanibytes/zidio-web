import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home/index';
import About from './pages/about/index';
import Contact from "./pages/contact/index";  // Assuming Contact is a default export

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />      
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
