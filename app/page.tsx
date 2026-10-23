import { clinic } from "../config/clinic";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Features } from "../components/Features";
import { Doctors } from "../components/Doctors";
import { Booking } from "../components/Booking";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";

export default function Home() {
  // Structured data so Google understands this is a dental clinic (local SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <Doctors />
        <Booking />
        <Testimonials />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
