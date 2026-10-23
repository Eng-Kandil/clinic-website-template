import { clinic } from "../config/clinic";
import { Icon } from "./Icon";

export function Testimonials() {
  return (
    <section className="section section--soft" id="reviews">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">آراء المراجعين</p>
          <h2>ماذا يقول مراجعونا</h2>
        </div>
        <div className="reviews">
          {clinic.testimonials.map((t) => (
            <figure key={t.name} className="review">
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
