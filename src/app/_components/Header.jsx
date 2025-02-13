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
  const [isDrawerVisible, setIsDrawerVisible] = useState(false); // Controls rendering

  const toggleDrawer = () => {
    if (!drawerOpen) {
      setIsDrawerVisible(true); // Show the drawer before animation
      setTimeout(() => setDrawerOpen(true), 10); // Small delay for smooth effect
    } else {
      setDrawerOpen(false);
      setTimeout(() => setIsDrawerVisible(false), 500); // Delay removal after animation
    }
  };

  return (
    <>
      <header className="header" data-aos="fade-up">
        <div className="logo logo_white">
          <img src="/images/logo.jpg" alt="Logo" />
          <div className="hidden">Gala Rental</div>
        </div>
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

      {isDrawerVisible && (
        <div className={`mobile-drawer ${drawerOpen ? "open" : "close"}`}>
          <div className="drawer-header">
            <button className="close-button" onClick={toggleDrawer}>✕</button>
          </div>
          <div className="drawer-content">
            <div className="drawer-item">
              <a href="/" onClick={toggleDrawer}><HomeIcon />Home</a>
            </div>
            <div className="drawer-item">
              <a href="/Categories" onClick={toggleDrawer}><CategoryIcon />Categories</a>
            </div>
            <div className="drawer-item">
              <a href="/Wishlist" onClick={toggleDrawer}><WishlistIcon />Wishlist</a>
            </div>
            <div className="drawer-item">
              <a href="/Cart" onClick={toggleDrawer}><CartIcon /> Cart</a>
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
