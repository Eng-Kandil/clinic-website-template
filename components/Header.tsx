import type { Clinic } from "../config/clinic";
import { Icon } from "./Icon";

const links = [
  { href: "#services", label: "الخدمات" },
  { href: "#doctors", label: "الأطباء" },
  { href: "#reviews", label: "آراء المراجعين" },
  { href: "#contact", label: "الموقع وأوقات العمل" },
];

export function Header({ clinic }: { clinic: Clinic }) {
  // Hide links to sections that are turned off (empty lists)
  const visible = links.filter(
    (l) => !(l.href === "#doctors" && !clinic.doctors.length) && !(l.href === "#reviews" && !clinic.testimonials.length),
  );
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo" aria-label={clinic.name}>
          <span className="logo__mark">
            <Icon name="tooth" size={20} />
          </span>
          <span className="logo__text">{clinic.name}</span>
        </a>

        <nav className="nav" aria-label="القائمة الرئيسية">
          {visible.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="header__phone" dir="ltr">
            <Icon name="phone" size={16} />
            <span>{clinic.phone}</span>
          </a>
          <a href="#booking" className="btn btn--primary btn--sm">
            احجز موعدك
          </a>
        </div>
      </div>
    </header>
  );
}
