import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/e-commerce.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/about-us";
import MyWishlists from "./pages/my-wishlist";
import ShoppingPage from "./pages/shopping-page";
import SubShoppingPage from "./pages/shopping-page2";
import ShopHeroSection from "./pages/shop/Hero";
import HeaderPage from "./components/header";
import MyCart from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import MyAccountSection from "./pages/my-account";
import BlogPage from "./pages/blog-page";
import ContactSection from "./pages/contact-us";
import FaQs from "./pages/Faqs";
import { CartProvider } from "./cart-function";
import ItemPage from "./pages/items/Item1";
import Item2Page from "./pages/items/Item2";
import Item3Page from "./pages/items/Item3";
import Item4Page from "./pages/items/Item4";
import Item5Page from "./pages/items/item5";
import Item6Page from "./pages/items/Item6";
import Item7Page from "./pages/items/Item7";
import Item8Page from "./pages/items/Item8";
import ItemCart from "./pages/item-cart";
import products from "./pages/Products";
import SubShopHeroSection from "./pages/shop/sub-hero";
import SearchResultsPage from "./pages/search-page";
import HeroSection from "./pages/home/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const proRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/search",
    element: <SearchResultsPage />,
  },
  {
    path: "/about-us",
    element: <AboutPage />,
  },
  {
    path: "/header",
    element: <HeaderPage />,
  },
  {
    path: "/shopping-page2",
    element: <SubShoppingPage />,
  },

  {
    path: "/home/hero",
    element: <HeroSection products={products} />,
  },
  {
    path: "/shop/hero",
    element: <ShopHeroSection products={products} />,
  },
  {
    path: "/shop/sub-hero",
    element: <SubShopHeroSection />,
  },
  {
    path: "/shopping-page",
    element: <ShoppingPage />,
  },
  {
    path: "/blog-page",
    element: <BlogPage />,
  },
  {
    path: "/my-account",
    element: <MyAccountSection />,
  },
  {
    path: "/my-wishlists",
    element: <MyWishlists />,
  },
  {
    path: "/cart",
    element: <MyCart />,
  },
  {
    path: "/faqs",
    element: <FaQs />,
  },
  {
    path: "/item1",
    element: <ItemPage />,
  },
  {
    path: "/item2",
    element: <Item2Page />,
  },
  {
    path: "/item3",
    element: <Item3Page />,
  },
  {
    path: "/item4",
    element: <Item4Page />,
  },
  {
    path: "/item5",
    element: <Item5Page />,
  },
  {
    path: "/item6",
    element: <Item6Page />,
  },
  {
    path: "/item7",
    element: <Item7Page />,
  },
  {
    path: "/item8",
    element: <Item8Page />,
  },
  {
    path: "/item-cart/:id",
    element: <ItemCart />,
  },

  {
    path: "/contact-us",
    element: <ContactSection />,
  },
]);

root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={proRouter} />
    </CartProvider>
  </React.StrictMode>
);
