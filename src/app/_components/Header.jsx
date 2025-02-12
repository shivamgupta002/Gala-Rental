"use client";
import React, { useState, useEffect } from "react";
import "../_css/Header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShoppingCart as CartIcon, FormatListBulleted as CategoryIcon, FavoriteBorder as WishlistIcon, Home as HomeIcon, Login as LoginIcon } from "@mui/icons-material";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`header ${scrolled ? "scrolled" : ""}`}
        data-aos="fade-up"
      >
        <div className={`logo ${scrolled ? "logo_black" : "logo_white"}`}>Gala Rentals</div>
        <div className="hamburger-menu" onClick={toggleDrawer}>
          ☰
        </div>
        <nav className="nav-menu">
          <a href="/"><HomeIcon />Home</a>
          <a href="/Categories"><CategoryIcon />Categories</a>
          <a href="/Wishlist"><WishlistIcon />Wishlist</a>
          <a href="/Cart"><CartIcon /> Cart</a>
          <a href="/Login">
            <button className="button login_button"><LoginIcon /> &nbsp;Login/SignUp</button>
          </a>
          
        </nav>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="mobile-drawer">
          <div className="drawer-header">
            <button className="close-button" onClick={toggleDrawer}>
              ✕
            </button>
          </div>
          <div className="drawer-content">
            <div className="drawer-item">
              <a href="/" onClick={toggleDrawer}>
                <HomeIcon />Home
              </a>
            </div>
            <div className="drawer-item">
              <a href="/Categories" onClick={toggleDrawer}>
                <CategoryIcon />Categories
              </a>
            </div>
            <div className="drawer-item">
              <a href="/Wishlist" onClick={toggleDrawer}>
                <WishlistIcon />Wishlist
              </a>
            </div>
            <div className="drawer-item">
              <a href="/Cart" onClick={toggleDrawer}>
                <CartIcon /> Cart
              </a>
            </div>

            <div className="drawer-item">
              <a href="/Login">
                <button className="button login_button"><LoginIcon />&nbsp; Login/SignUp</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
