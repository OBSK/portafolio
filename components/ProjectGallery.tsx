import { projects } from "@/lib/data";

import styles from "./ProjectGallery.module.css";
import { SectionTitle } from "./SectionTitle";

export function ProjectGallery() {
  return (
    <section id="proyectos">
      <div className="container">
        <SectionTitle
          eyebrow="Proyectos insignia"
          title="Estrategias y productos que transforman industrias"
          description="Cada entrega es un laboratorio donde combiné data, narrativa y tecnología para crear experiencias memorables y medibles."
        />
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.name} className={styles.card}>
              <div className={styles.year}>{project.year}</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className={styles.impact}>{project.impact}</div>
              <ul className={styles.tags}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
