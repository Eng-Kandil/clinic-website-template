import type { CSSProperties } from "react";
import type { Clinic } from "../config/clinic";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Features } from "./Features";
import { Doctors } from "./Doctors";
import { Booking } from "./Booking";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";
import { Faq } from "./Faq";
import { Footer } from "./Footer";

/** The full one-page site for one clinic. `demo` adds a small "sample site" bar on top. */
export function ClinicPage({ clinic, demo = false }: { clinic: Clinic; demo?: boolean }) {
  // Brand colors from the config become CSS variables
  const themeVars = {
    "--primary": clinic.theme.primary,
    "--primary-dark": clinic.theme.primaryDark,
    "--primary-soft": clinic.theme.primarySoft,
    "--accent": clinic.theme.accent,
  } as CSSProperties;

  // Structured data so Google understands what kind of business this is (local SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": clinic.schemaType,
    name: clinic.name,
    description: clinic.seoDescription,
    url: clinic.siteUrl,
    telephone: clinic.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: clinic.city,
      addressCountry: "SA",
    },
  };

  return (
    <div style={themeVars}>
      {!demo && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      {demo && (
        <div className="demo-bar">
          نموذج تجريبي لموقع {clinic.name} — كل المحتوى والألوان قابلة للتعديل
        </div>
      )}
      <Header clinic={clinic} />
      <main>
        <Hero clinic={clinic} />
        <Services clinic={clinic} />
        <Features clinic={clinic} />
        <Doctors clinic={clinic} />
        <Booking clinic={clinic} />
        <Testimonials clinic={clinic} />
        <Contact clinic={clinic} />
        <Faq clinic={clinic} />
      </main>
      <Footer clinic={clinic} />
    </div>
  );
}
