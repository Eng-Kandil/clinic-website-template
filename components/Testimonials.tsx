import type { Clinic } from "../config/clinic";
import { Icon } from "./Icon";

export function Testimonials({ clinic }: { clinic: Clinic }) {
  if (!clinic.testimonials.length) return null;
  return (
    <section className="section section--soft" id="reviews">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">آراء المراجعين</p>
          <h2>ماذا يقول مراجعونا</h2>
        </div>
        <div className="reviews">
          {clinic.testimonials.map((t, i) => (
            <figure key={i} className="review">
              <div className="stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Icon key={i} name="star" size={16} filled />
                ))}
              </div>
              <blockquote>{t.text}</blockquote>
              <figcaption>{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
