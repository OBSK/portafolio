import { experience } from "@/lib/data";

import styles from "./ExperienceTimeline.module.css";
import { SectionTitle } from "./SectionTitle";

export function ExperienceTimeline() {
  return (
    <section id="experiencia">
      <div className="container">
        <SectionTitle
          eyebrow="Trayectoria"
          title="Experiencia que combina estrategia, investigación y liderazgo creativo"
          description="He navegado industrias complejas guiando equipos multidisciplinarios hacia soluciones que abrazan tanto los objetivos de negocio como las necesidades humanas."
        />
        <div className={styles.timeline}>
          {experience.map((entry) => (
            <article key={entry.company} className={styles.card}>
              <header>
                <span className={styles.period}>{entry.period}</span>
                <h3>
                  {entry.role} · <span>{entry.company}</span>
                </h3>
              </header>
              <ul>
                {entry.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
