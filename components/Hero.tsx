import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <span className="tag">Portafolio 2024</span>
            <h1 className={styles.title}>
              Diseño de experiencias digitales que se sienten humanas, brillan como el futuro y generan impacto real.
            </h1>
            <p className={styles.description}>
              Soy Sofía Luna, estratega de producto y diseñadora con una década liderando equipos creativos. Transformo ideas
              complejas en productos memorables guiados por datos, empatía y estética.
            </p>
            <div className={styles.actions}>
              <Link href="#proyectos" className="button">
                <span>Explora mis proyectos</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="#contacto" className={styles.secondaryButton}>
                <span>Solicita una consultoría</span>
              </Link>
            </div>
            <dl className={styles.stats}>
              <div>
                <dt>+60</dt>
                <dd>productos digitales lanzados</dd>
              </div>
              <div>
                <dt>9 países</dt>
                <dd>equipos interculturales liderados</dd>
              </div>
              <div>
                <dt>3x</dt>
                <dd>crecimiento promedio en métricas clave</dd>
              </div>
            </dl>
          </div>
          <div className={styles.panel}>
            <div className={styles.hologram}>
              <div className={styles.hologramGlow} />
              <Image src="/sofia-luna-portrait.svg" alt="Retrato conceptual de Sofía Luna" width={420} height={520} />
              <span className={styles.hologramLabel}>Sofía Luna — Principal Product Designer</span>
            </div>
            <div className={styles.badges}>
              <div>
                <strong>Visión sistémica</strong>
                <p>Opero donde convergen negocio, diseño y tecnología.</p>
              </div>
              <div>
                <strong>Metodologías vivas</strong>
                <p>Orquesto procesos fluidos para equipos remotos en constante evolución.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
