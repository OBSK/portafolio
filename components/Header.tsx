"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./Header.module.css";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <div className={styles.headerBar}>
          <Link href="#inicio" className={styles.logo}>
            <span className={styles.logoDot} />
            Sofía Luna
          </Link>
          <nav className={styles.nav}>
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className={styles.navLink}>
                {section.label}
              </a>
            ))}
          </nav>
          <Link href="#contacto" className={`button ${styles.cta}`}>
            <span>Reserva una llamada</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19L19 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 5H19V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
