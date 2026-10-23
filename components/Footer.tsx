import { clinic, whatsappLink } from "../config/clinic";
import { Icon } from "./Icon";

const socialLabels: Record<string, string> = {
  instagram: "إنستغرام",
  x: "إكس",
  snapchat: "سناب شات",
  tiktok: "تيك توك",
};

export function Footer() {
  const socials = Object.entries(clinic.social).filter(([, url]) => url);
  return (
    <>
      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <a href="#top" className="logo logo--light">
              <span className="logo__mark"><Icon name="tooth" size={20} /></span>
              <span className="logo__text">{clinic.name}</span>
            </a>
            <p className="footer__text">{clinic.address}</p>
          </div>
          {socials.length > 0 && (
            <ul className="footer__social">
              {socials.map(([key, url]) => (
                <li key={key}>
                  <a href={url} target="_blank" rel="noopener noreferrer">{socialLabels[key] ?? key}</a>
                </li>
              ))}
            </ul>
          )}
          <p className="footer__copy">
            © {new Date().getFullYear()} {clinic.name}. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a href={whatsappLink()} className="fab" target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب">
        <Icon name="chat" size={26} />
      </a>
    </>
  );
}
