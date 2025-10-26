import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p>
            © {new Date().getFullYear()} Sofía Luna. Diseñado con curiosidad, datos y humanidad. Sígueme en
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            y
            <a href="https://www.dribbble.com" target="_blank" rel="noreferrer">
              Dribbble
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
