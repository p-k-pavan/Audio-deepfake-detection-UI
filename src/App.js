import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
