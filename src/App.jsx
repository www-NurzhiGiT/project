import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HeroTop from "./components/heroTop/HeroTop";
import Believe from "./components/believe/Believe";
import Products from "./components/Products/Products";
import Trust from "./components/Trust/Trust";
import OrderCall from "./components/orderCall/OrderCall";
import Certification from "./components/certification/Certification";
import Review from "./components/review/Review";
import PolisOnline from "./components/polisOnline/PolisOnline";

const App = () => {
  return (
    <div>
      <Header />
      <HeroTop />
      <Believe />
      <Products />
      <Trust />
      <OrderCall />
      <Certification />
      <Review />
      <PolisOnline />
      <Footer />
    </div>
  );
};

export default App;
