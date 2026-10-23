import { Routes, Route } from "react-router-dom";

import Header from "./components/header/main";
import Hero from "./components/hero/main";
import About from "./components/about/main";
import TherapeuticAreas from "./components/therapeutic/main";
import Products from "./components/products/product";
import Blog from "./components/Blog/Blog";
import ImageShowcase from "./components/ImageShowcase/ImageShowcase";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import ContactPage from "./components/ContactPage/ContactPage";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TherapeuticAreas />
      <Blog />
      <ImageShowcase />
      <CTA />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;