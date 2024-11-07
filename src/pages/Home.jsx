import FooterPage from "../components/footer";
import HeaderPage from "../components/header";
import HeroSection from "./home/Hero";
import products from "./Products";
import React from "react";


export default function HomePage() {
  return (
    <>
      <HeaderPage />
      <HeroSection products={products} />
      <FooterPage />
    </>
  );
}
