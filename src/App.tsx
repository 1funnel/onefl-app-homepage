import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer";
import Contact from "./pages/Home/contact";
import About from "./pages/Home/about"

function App() { 
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
