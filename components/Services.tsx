import { clinic } from "../config/clinic";
import { Icon } from "./Icon";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">خدماتنا</p>
          <h2>كل ما تحتاجه أسنانك في مكان واحد</h2>
          <p>خطط علاج واضحة وأسعار معلنة قبل البدء، بدون مفاجآت.</p>
        </div>

        <div className="services">
          {clinic.services.map((s) => (
            <article key={s.title} className="service">
              <span className="service__icon">
                <Icon name={s.icon} size={26} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="service__foot">
                <span className="service__price">{s.price}</span>
                <a href="#booking" className="service__link">
                  احجز
                  <Icon name="arrow" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
