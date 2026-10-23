import { clinic, whatsappLink } from "../config/clinic";
import { Icon } from "./Icon";

export function Hero() {
  const [first, second] = clinic.services;
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            <Icon name="pin" size={16} />
            {clinic.district}، {clinic.city}
          </p>
          <h1 className="hero__title">{clinic.tagline}</h1>
          <p className="hero__lead">{clinic.description}</p>

          <div className="hero__cta">
            <a href="#booking" className="btn btn--primary btn--lg">
              <Icon name="calendar" size={20} />
              احجز موعدك الآن
            </a>
            <a href={whatsappLink("السلام عليكم، أرغب بالاستفسار عن خدماتكم")} className="btn btn--ghost btn--lg" target="_blank" rel="noopener noreferrer">
              <Icon name="chat" size={20} />
              تواصل عبر واتساب
            </a>
          </div>

          <ul className="hero__points">
            <li><Icon name="check" size={16} /> تأمين طبي معتمد</li>
            <li><Icon name="check" size={16} /> مواقف مجانية</li>
            <li><Icon name="check" size={16} /> تأكيد الحجز خلال دقائق</li>
          </ul>
        </div>

        {/* Decorative visual — no stock photos needed */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__panel">
            <div className="hero__panel-icon">
              <Icon name="tooth" size={84} />
            </div>
            <div className="hero__ring hero__ring--1" />
            <div className="hero__ring hero__ring--2" />
          </div>

          <div className="float-card float-card--appt">
            <span className="float-card__icon"><Icon name="calendar" size={18} /></span>
            <div>
              <strong>موعدك القادم</strong>
              <span>{first?.title} · الأحد 7:30 م</span>
            </div>
          </div>

          <div className="float-card float-card--rating">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" size={14} filled />
              ))}
            </div>
            <span>
              <strong>{clinic.stats[3]?.value}</strong> تقييم المراجعين
            </span>
          </div>

          <div className="float-card float-card--service">
            <span className="float-card__icon float-card__icon--accent"><Icon name="smile" size={18} /></span>
            <span>{second?.title}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="stats">
          {clinic.stats.map((s) => (
            <div key={s.label} className="stats__item">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
