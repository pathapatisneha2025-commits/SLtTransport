import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

// COMPONENT IMPORTS
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhoWeAre from "./components/WhoAreWe";
import EquipmentCategories from "./components/EquipmentCategory";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import LatestBlogPosts from "./components/Blog";
import CtaSection from "./components/Cta";
import Footer from "./components/Footer";
import BlogPage from "./pages/BlogPage";
import ServicesPage from "./pages/Servicespage";
import ContactPage from "./pages/ContactPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import OilAndGasPage from "./pages/OilAndGas";
import WhoWeAreDetailed from "./pages/WhoWeareDetailed";
import CategoryDetail from "./pages/CategoryDetailed";
// import HeroSection from "./components/HeroSection";
// import ServicesSection from "./components/ServiceSection";
// import CTASection from "./components/CtaSection";
// import Footer from "./components/FooterSection";

// // PAGES
// import ServicesPage from "./pages/ServicePage";
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Router>
      {/* COMMON NAVBAR */}
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <WhoWeAre/>
              <EquipmentCategories/>
                <Services /> 
                <WhyChooseUs/>
                <LatestBlogPosts/>
               <CtaSection /> 
            </>
          }
        />

        OTHER PAGES
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<ContactPage />} />
                <Route path="/oilandgas" element={<OilAndGasPage />} />

          <Route path="/blog/:id" element={<BlogDetailPage />} />
                  <Route path="/category/:slug" element={<CategoryDetail />} />

          <Route path="/whowearedetailed" element={<WhoWeAreDetailed />} />

      </Routes>

      {/* COMMON FOOTER */}
    <Footer /> 
    </Router>
  );
}
