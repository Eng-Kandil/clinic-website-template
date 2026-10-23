import { clinic } from "../config/clinic";

function initials(name: string) {
  // "د. سارة العتيبي" -> "س ع"
  const parts = name.replace(/^د\.?\s*/, "").trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((p) => p.replace(/^ال/, "").charAt(0))
    .join(" ");
}

export function Doctors() {
  return (
    <section className="section section--soft" id="doctors">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">فريقنا الطبي</p>
          <h2>أطباء تعرفهم بالاسم</h2>
          <p>نخبة من الاستشاريين والأخصائيين بخبرات طويلة في مجالاتهم.</p>
        </div>

        <div className="doctors">
          {clinic.doctors.map((d, i) => (
            <article key={d.name} className="doctor">
              <div className={`doctor__photo doctor__photo--${(i % 4) + 1}`}>
                {d.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={d.image} alt={d.name} />
                ) : (
                  <span>{initials(d.name)}</span>
                )}
              </div>
              <h3>{d.name}</h3>
              <p>{d.title}</p>
              <span className="doctor__years">{d.years} سنة خبرة</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
