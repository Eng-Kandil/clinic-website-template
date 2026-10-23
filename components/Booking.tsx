"use client";

import { useState, type FormEvent } from "react";
import { clinic, whatsappLink } from "../config/clinic";
import { Icon } from "./Icon";

export function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(clinic.services[0]?.title ?? "");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(clinic.booking.timeSlots[0] ?? "");
  const [notes, setNotes] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const details = [
      `الاسم: ${name}`,
      `الجوال: ${phone}`,
      `الخدمة: ${service}`,
      date && `التاريخ المفضل: ${date}`,
      slot && `الوقت المفضل: ${slot}`,
      notes && `ملاحظات: ${notes}`,
    ].filter(Boolean) as string[];
    const lines = [`السلام عليكم، أرغب بحجز موعد في ${clinic.name}`, "", ...details];
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const external = clinic.booking.externalUrl;

  return (
    <section className="section" id="booking">
      <div className="container booking">
        <div className="booking__intro">
          <p className="eyebrow">الحجز</p>
          <h2>احجز موعدك في أقل من دقيقة</h2>
          <p>
            املأ البيانات وسيُرسل طلبك مباشرة إلى فريق الاستقبال عبر واتساب،
            ونؤكد لك الموعد في أسرع وقت.
          </p>
          <ul className="booking__steps">
            <li><span>1</span> اختر الخدمة والوقت المناسب</li>
            <li><span>2</span> أرسل الطلب عبر واتساب</li>
            <li><span>3</span> نؤكد موعدك ونرسل لك تذكيراً</li>
          </ul>
        </div>

        {external ? (
          <div className="booking__card booking__card--external">
            <Icon name="calendar" size={40} />
            <h3>الحجز الإلكتروني</h3>
            <p>اختر الطبيب والموعد المتاح مباشرة من نظام الحجز.</p>
            <a href={external} className="btn btn--primary btn--lg" target="_blank" rel="noopener noreferrer">
              افتح نظام الحجز
            </a>
          </div>
        ) : (
          <form className="booking__card" onSubmit={submit}>
            <div className="field">
              <label htmlFor="b-name">الاسم</label>
              <input id="b-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="الاسم الكامل" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="b-phone">رقم الجوال</label>
              <input id="b-phone" required type="tel" dir="ltr" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="05xxxxxxxx" autoComplete="tel" />
            </div>
            <div className="field field--full">
              <label htmlFor="b-service">الخدمة</label>
              <select id="b-service" value={service} onChange={(e) => setService(e.target.value)}>
                {clinic.services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>استشارة عامة</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="b-date">التاريخ المفضل</label>
              <input id="b-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="b-slot">الوقت المفضل</label>
              <select id="b-slot" value={slot} onChange={(e) => setSlot(e.target.value)}>
                {clinic.booking.timeSlots.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="field field--full">
              <label htmlFor="b-notes">ملاحظات (اختياري)</label>
              <textarea id="b-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="مثلاً: أول زيارة، لدي تأمين طبي…" />
            </div>
            <button type="submit" className="btn btn--primary btn--lg btn--block field--full">
              <Icon name="chat" size={20} />
              إرسال طلب الحجز عبر واتساب
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
