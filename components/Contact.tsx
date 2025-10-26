import Link from "next/link";

import styles from "./Contact.module.css";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  return (
    <section id="contacto">
      <div className="container">
        <div className={styles.wrapper}>
          <SectionTitle
            eyebrow="Colaboremos"
            title="Diseñemos el siguiente salto de tu producto"
            description="Agenda una sesión estratégica para auditar tu experiencia, identificar oportunidades de innovación y cocrear un roadmap accionable."
          />
          <div className={styles.panel}>
            <div className={styles.details}>
              <div>
                <span>Disponibilidad</span>
                <strong>Abril 2024</strong>
              </div>
              <div>
                <span>Formato</span>
                <strong>Workshops inmersivos y consultorías remotas</strong>
              </div>
              <div>
                <span>Idiomas</span>
                <strong>Español · Inglés</strong>
              </div>
            </div>
            <Link href="mailto:hola@sofialuna.studio" className="button">
              <span>Escríbeme a hola@sofialuna.studio</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 7L10.4 11.2C11.3667 11.8444 12.6333 11.8444 13.6 11.2L20 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
