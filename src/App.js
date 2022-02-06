import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Choose from './components/Choose';
import Home from './components/Home';
import Categories from './components/Categories';
import MostSold from './components/MostSold';
import Products from './components/Products';
import Promo from './components/Promo';
import Recommend from './components/Recommend';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import "./scss/index.scss";
export default function App() {
  const [theme, setTheme] = useState("dark");
  return <div className="app" data-theme={theme}>
    <Navbar />
    <Choose />
    <Home />
    <Categories />
    <MostSold />
    <Products />
    <Promo />
    <Recommend />
    <ScrollToTop />
    <Services />
  </div>;
}
