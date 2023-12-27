import React, { useState } from 'react';
import Slidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Navbar from "./components/Navbar";
import CombineSection from "./components/CombineSection";
import Blog_1 from './components/pages/blogs/Blog_1';
import NotFound from './components/pages/NotFound';
import Blog_2 from './components/pages/blogs/Blog_2';
import Blog_3 from './components/pages/blogs/Blog_3';

function App() {
  const [navTarget, setNavTarget] = useState("About");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/How-Reading-Books-Makes-You-A-Better-Front-End-Developer" element={<Blog_1 />} />
          <Route path="/blog/Just-Watching-Video-Tutorials-from-YouTube-Doesn’t-Make-You-an-Experienced-Web-Developer" element={<Blog_2 />} />
          <Route path="/blog/Is-a-Bachelor’s-Degree-Necessary-to-Master-Frontend-Web-Development?" element={<Blog_3 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <main>
        <Slidebar />
        <div className="main-content">
          <Navbar setNavTarget={setNavTarget} />
          {navTarget === 'About' && <About />}
          {navTarget === 'Blog' && <Blog />}
          {navTarget === 'Contact' && <Contact />}
          {navTarget === 'Portfolio' && <Portfolio />}
          {navTarget === 'Resume' && <Resume />}
        </div>
      </main> */}
      {/* <CombineSection navTarget = {navTarget} setNavTarget = {setNavTarget}/> */}
      {/* <About setNavTarget = {setNavTarget}/> */}
    </>
  );
}

export default App;
