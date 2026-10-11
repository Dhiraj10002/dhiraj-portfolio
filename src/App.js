import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar";
import CursorCanvas from "./components/CursorCanvas/CursorCanvas";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <CursorCanvas />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
