import React from "react";
import Header from "../src/components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hackathons from "./pages/Hackathons";
import Certificates from "./pages/Certificates";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
