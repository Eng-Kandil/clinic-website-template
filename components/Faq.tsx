import type { Clinic } from "../config/clinic";
import { Icon } from "./Icon";

export function Faq({ clinic }: { clinic: Clinic }) {
  return (
    <section className="section section--soft" id="faq">
      <div className="container container--narrow">
        <div className="section__head">
          <p className="eyebrow">أسئلة شائعة</p>
          <h2>لديك سؤال؟</h2>
        </div>
        <div className="faq">
          {clinic.faqs.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>
                {f.q}
                <Icon name="plus" size={18} className="faq__icon" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
