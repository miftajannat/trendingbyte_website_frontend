import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Header = ({ handleOpen, handleRemove, openClass }) => {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? "header sticky-bar bg-gray-900 stick"
            : "header sticky-bar bg-gray-900"
        }
        
      >
        <div className="container">
          <div className="main-header">
            <div className="header-logo">
              <Link className="d-flex" href="/">
                <img alt="GenZ" src="/assets/imgs/template/logo.svg" />
              </Link>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li>
                    <Link className="active" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link class="color-gray-500" href="/page-404">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="color-gray-500" href="/page-contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
