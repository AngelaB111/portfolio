import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import React from "react";
import { Footer } from "./components/Footer";
import "./index.css";
import { Projects } from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import { ProjectDetail } from "./components/ProjectDetails";
import { Section } from "./components/Section";
import { Journal } from "./components/Journal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route
          path="/" 
          element={
            <>
              <Home />
              <Projects preview />
              <Section />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
