import { insights } from "@/lib/data";

import styles from "./SkillsMarquee.module.css";

export function SkillsMarquee() {
  return (
    <section aria-label="Principios de trabajo">
      <div className="container">
        <div className={styles.wrapper}>
          {insights.map((item) => (
            <div key={item.title} className={styles.card}>
              <span className={styles.metric}>{item.metric}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
