import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Contact from "./components/contact/contact";
import Navbar from "./components/navbar/navbar";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Routes path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
