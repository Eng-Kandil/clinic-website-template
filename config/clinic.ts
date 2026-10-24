/**
 * ============================================================
 *  ملف إعدادات العيادة — CLINIC SETTINGS FILE
 * ============================================================
 *  هذا هو الملف الوحيد الذي تحتاج تعديله لكل عميل جديد.
 *  This is the ONLY file you need to edit for each new client.
 *
 *  1. Change the text, phone, WhatsApp number and hours below.
 *  2. Change the colors in `theme`.
 *  3. (Optional) Put doctor photos in /public/images and set `image`.
 *  4. Deploy.
 * ============================================================
 */

export type IconName =
  | "tooth"
  | "sparkles"
  | "shield"
  | "smile"
  | "activity"
  | "award"
  | "clock"
  | "users"
  | "calendar"
  | "heart";

export type Clinic = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  seoDescription: string;
  siteUrl: string;
  schemaType: string;
  city: string;
  district: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  mapQuery: string;
  booking: { externalUrl: string; timeSlots: string[] };
  theme: { primary: string; primaryDark: string; primarySoft: string; accent: string };
  rating: string;
  heroPoints: string[];
  hours: { day: string; time: string }[];
  stats: { value: string; label: string }[];
  services: { icon: IconName; title: string; description: string; price: string }[];
  features: { icon: IconName; title: string; text: string }[];
  doctors: { name: string; title: string; years: number; image: string }[];
  testimonials: { name: string; text: string; rating: number }[];
  faqs: { q: string; a: string }[];
  social: { instagram: string; x: string; snapchat: string; tiktok: string };
};

export const clinic: Clinic = {
  // ---------- الهوية | Identity ----------
  name: "عيادات بسمة لطب الأسنان",
  shortName: "بسمة",
  tagline: "ابتسامة صحية تبدأ من زيارة واحدة",
  description:
    "رعاية متكاملة لأسنانك وأسنان عائلتك بأيدي استشاريين ذوي خبرة، وأحدث التقنيات، وتجربة مريحة من أول اتصال حتى آخر موعد.",
  // Used for Google search results & link previews (SEO)
  seoDescription:
    "عيادات بسمة لطب الأسنان في حي الملقا بالرياض — تقويم، زراعة، تبييض، وعلاج أسنان الأطفال. احجز موعدك عبر واتساب.",
  siteUrl: "https://example.com",
  // schema.org business type for Google: "Dentist", "MedicalClinic", "Physiotherapy", "BeautySalon"...
  schemaType: "Dentist",

  // ---------- التواصل | Contact ----------
  city: "الرياض",
  district: "حي الملقا",
  address: "طريق أنس بن مالك، حي الملقا، الرياض",
  phone: "+966 11 000 0000",
  // WhatsApp number in international format, digits only (no +, no spaces)
  whatsapp: "966500000000",
  email: "info@example.com",
  // What to search on Google Maps for the embedded map
  mapQuery: "حي الملقا، الرياض",

  // ---------- الحجز | Booking ----------
  booking: {
    // If you set this to a booking system URL (e.g. your ClinicOS link),
    // the "Book" buttons open it instead of the WhatsApp form.
    externalUrl: "",
    timeSlots: ["صباحاً (9 – 12)", "ظهراً (12 – 4)", "مساءً (4 – 10)"],
  },

  // ---------- الألوان | Colors ----------
  theme: {
    primary: "#0e6b63", // main brand color (buttons, headings accents)
    primaryDark: "#0a4d47", // hover / dark sections
    primarySoft: "#e3f1ee", // light tinted backgrounds
    accent: "#d99a3d", // small highlights (stars, badges)
  },

  // ---------- أوقات العمل | Working hours ----------
  hours: [
    { day: "السبت – الخميس", time: "9:00 ص – 10:00 م" },
    { day: "الجمعة", time: "4:00 م – 10:00 م" },
  ],

  // ---------- الواجهة | Hero ----------
  // Google rating shown on the hero card. Leave "" to hide the card.
  rating: "4.9",
  // Short selling points under the hero buttons. Only list what is true for this clinic.
  heroPoints: ["تأمين طبي معتمد", "مواقف مجانية", "تأكيد الحجز خلال دقائق"],

  // ---------- أرقام سريعة | Quick stats ----------
  stats: [
    { value: "+12", label: "سنة خبرة" },
    { value: "+8,000", label: "مراجع سعيد" },
    { value: "6", label: "أطباء استشاريين" },
    { value: "4.9", label: "تقييم على Google" },
  ],

  // ---------- الخدمات | Services ----------
  services: [
    {
      icon: "sparkles" as IconName,
      title: "تبييض الأسنان",
      description: "تبييض آمن بالليزر في جلسة واحدة، بنتائج طبيعية تدوم.",
      price: "من 900 ر.س",
    },
    {
      icon: "smile" as IconName,
      title: "تقويم الأسنان",
      description: "تقويم شفاف ومعدني بخطة علاج واضحة ومتابعة دورية.",
      price: "استشارة مجانية",
    },
    {
      icon: "tooth" as IconName,
      title: "زراعة الأسنان",
      description: "زراعة بأنظمة معتمدة عالمياً مع تصوير ثلاثي الأبعاد قبل العلاج.",
      price: "من 3,500 ر.س",
    },
    {
      icon: "shield" as IconName,
      title: "علاج العصب",
      description: "علاج جذور دقيق بالمجهر وبأقل قدر ممكن من الألم.",
      price: "من 700 ر.س",
    },
    {
      icon: "heart" as IconName,
      title: "أسنان الأطفال",
      description: "بيئة مريحة للأطفال وأطباء متخصصون في التعامل معهم.",
      price: "من 200 ر.س",
    },
    {
      icon: "activity" as IconName,
      title: "تنظيف وفحص دوري",
      description: "فحص شامل وتنظيف جير وتلميع للحفاظ على صحة اللثة.",
      price: "من 250 ر.س",
    },
  ],

  // ---------- لماذا نحن | Why choose us ----------
  features: [
    { icon: "award" as IconName, title: "أطباء استشاريون", text: "خبرات معتمدة من الهيئة السعودية للتخصصات الصحية." },
    { icon: "shield" as IconName, title: "تعقيم كامل", text: "بروتوكولات تعقيم صارمة وأدوات أحادية الاستخدام." },
    { icon: "clock" as IconName, title: "مواعيد دقيقة", text: "نحترم وقتك — انتظار قليل وتذكير قبل موعدك." },
    { icon: "users" as IconName, title: "لكل العائلة", text: "علاج للكبار والصغار في مكان واحد." },
  ],

  // ---------- الأطباء | Doctors (empty list hides the section) ----------
  // image: put a file in /public/images (e.g. "/images/dr-sara.jpg"). Leave "" to show initials.
  doctors: [
    { name: "د. سارة العتيبي", title: "استشارية تقويم الأسنان", years: 14, image: "" },
    { name: "د. فهد القحطاني", title: "استشاري زراعة الأسنان", years: 16, image: "" },
    { name: "د. ريم الشهري", title: "أخصائية طب أسنان الأطفال", years: 9, image: "" },
    { name: "د. خالد الدوسري", title: "أخصائي علاج العصب", years: 11, image: "" },
  ],

  // ---------- آراء المراجعين | Testimonials (empty list hides the section) ----------
  testimonials: [
    { name: "أم عبدالله", text: "تعامل راقٍ جداً، وابني صار يحب يروح لدكتور الأسنان بعد ما كان يخاف.", rating: 5 },
    { name: "محمد الحربي", text: "سويت زراعة عندهم والنتيجة ممتازة. الدكتور شرح لي كل خطوة قبل ما يبدأ.", rating: 5 },
    { name: "نورة السبيعي", text: "المواعيد مضبوطة والعيادة نظيفة جداً. أنصح فيهم وبقوة.", rating: 5 },
  ],

  // ---------- الأسئلة الشائعة | FAQ ----------
  faqs: [
    { q: "هل تقبلون التأمين الطبي؟", a: "نعم، نتعامل مع أغلب شركات التأمين الكبرى. تواصل معنا عبر واتساب للتأكد من تغطية بوليصتك." },
    { q: "كيف أحجز موعداً؟", a: "املأ نموذج الحجز في هذه الصفحة وسيُرسل طلبك مباشرة عبر واتساب، وسنؤكد الموعد معك خلال وقت قصير." },
    { q: "هل الاستشارة الأولى مجانية؟", a: "استشارة التقويم مجانية. باقي الاستشارات تشمل فحصاً كاملاً وخطة علاج مكتوبة." },
    { q: "هل يوجد مواقف للسيارات؟", a: "نعم، تتوفر مواقف مجانية أمام العيادة مباشرة." },
  ],

  // ---------- روابط التواصل الاجتماعي | Social links (leave "" to hide) ----------
  social: {
    instagram: "",
    x: "",
    snapchat: "",
    tiktok: "",
  },
};

/** Builds a wa.me link with an optional pre-filled message. */
export function whatsappLink(whatsapp: string, message = "") {
  const base = `https://wa.me/${whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
