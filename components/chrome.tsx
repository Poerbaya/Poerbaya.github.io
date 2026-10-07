"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Ojasvi Energy Group home">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>
        <strong>
          ojasvi<span className="logo-dot">.</span>
        </strong>
        <small>ENERGY GROUP</small>
      </span>
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="utility">
        <span>Global perspective. Responsible progress.</span>
        <span>INDONESIA · GLOBAL AMBITION</span>
      </div>
      <header className="header">
        <Logo />
        <nav
          id="main-navigation"
          className={open ? "navigation mobile-open" : "navigation"}
          aria-label="Main navigation"
        >
          <a href="#executive-summary" onClick={() => setOpen(false)}>
            Executive summary
          </a>
          <a href="#company-positioning" onClick={() => setOpen(false)}>
            Company positioning
          </a>
        </nav>
        <a className="header-cta" href="#company-positioning">
          Discover Ojasvi <ArrowUpRight size={16} />
        </a>
        <button
          className="icon-button menu-button"
          aria-controls="main-navigation"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Logo />
        <p>
          Powering Progress.
          <br />
          Shaping Tomorrow.
        </p>
        <div>
          <span>OUR HEADQUARTERS</span>
          <p>
            Pekajangan, Central Java
            <br />
            Indonesia
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ojasvi Energy Group</span>
        <span>Global ambition. Responsible foundations.</span>
        <a href="#executive-summary">Back to top ↑</a>
      </div>
    </footer>
  );
}
