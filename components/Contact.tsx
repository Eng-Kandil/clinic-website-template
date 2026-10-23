import { clinic, whatsappLink } from "../config/clinic";
import { Icon } from "./Icon";

export function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&z=15&output=embed`;
  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div className="contact__info">
          <p className="eyebrow">زورونا</p>
          <h2>الموقع وأوقات العمل</h2>

          <div className="info-row">
            <span className="info-row__icon"><Icon name="pin" size={20} /></span>
            <div>
              <strong>العنوان</strong>
              <p>{clinic.address}</p>
            </div>
          </div>

          <div className="info-row">
            <span className="info-row__icon"><Icon name="clock" size={20} /></span>
            <div>
              <strong>أوقات العمل</strong>
              <ul className="hours">
                {clinic.hours.map((h) => (
                  <li key={h.day}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="info-row">
            <span className="info-row__icon"><Icon name="phone" size={20} /></span>
            <div>
              <strong>الهاتف</strong>
              <p><a href={`tel:${clinic.phone.replace(/\s/g, "")}`} dir="ltr">{clinic.phone}</a></p>
            </div>
          </div>

          <a href={whatsappLink()} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
            <Icon name="chat" size={18} />
            راسلنا على واتساب
          </a>
        </div>

        <div className="contact__map">
          <iframe
            src={mapSrc}
            title={`موقع ${clinic.name} على الخريطة`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
