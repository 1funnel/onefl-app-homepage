import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer";
import Contact from "./pages/Home/contact";
import About from "./pages/Home/about";

import Products from "./pages/Home/products";

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
