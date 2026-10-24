import type { Clinic } from "../config/clinic";
import { Icon } from "./Icon";

export function Features({ clinic }: { clinic: Clinic }) {
  return (
    <section className="section section--dark">
      <div className="container features">
        <div className="features__intro">
          <p className="eyebrow eyebrow--light">لماذا {clinic.shortName}؟</p>
          <h2>رعاية تثق بها، وتجربة تريحك</h2>
          <p>
            نعرف أن زيارة طبيب الأسنان ليست المفضلة لدى الجميع، لذلك صممنا كل
            تفصيلة لتكون زيارتك أسهل وأهدأ.
          </p>
        </div>
        <ul className="features__list">
          {clinic.features.map((f) => (
            <li key={f.title} className="feature">
              <span className="feature__icon">
                <Icon name={f.icon} size={22} />
              </span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
