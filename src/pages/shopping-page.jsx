import FooterShopPage from "../components/footer-shop";
import HeaderPage from "../components/header";
import ShopHeroSection from "./shop/Hero";
import React from "react";
import products from "./Products";
export default function ShoppingPage() {
  return (
    <>
      <HeaderPage />
      <ShopHeroSection products={products} />
      {/* <FooterShopPage /> */}
    </>
  );
}
